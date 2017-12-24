<template>
    <v-flex xs12 sm9 offset-sm1 md8 offset-md1>
        <div class="dropbox">
            <input 
                type="file" 
                multiple 
                :disabled="isSaving" 
                @change="filesChange($event.target.files)" 
                accept=".js,.java,.php,.txt"
                class="input-file"
            >   
        </div>

        <div v-if="(waitingUpload || isSaving || isSuccess) && (willbeUploaded.length > 0)">
            <list-file-upload :items="willbeUploaded" @removeItem="removeFileFromList"></list-file-upload>
            <v-btn
                :loading="isSaving"
                @click.native="upload"
                :disabled="isSaving"
                color="blue-grey"
                class="white--text"
                >
                Upload
                <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
        </div>
    </v-flex>       
</template>
<script>
    import { Meteor } from 'meteor/meteor'
    import { uploadMultiFile } from '../../modules/FilesTools'
    import ListFileUpload from './ListFileUpload';
    import Vue from 'vue';
    
    const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3, STATUS_WAITING = 4;

    export default {
        data() {
            return {
                uploadedFiles: [],
                uploadError: null,
                currentStatus: null,
                willbeUploaded: []    
            }
        },
        computed: {
            isInitial() {
                return this.currentStatus === STATUS_INITIAL;
            },
            waitingUpload() {
                return this.currentStatus === STATUS_WAITING;
            },
            isSaving() {
                return this.currentStatus === STATUS_SAVING;
            },
            isSuccess() {
                return this.currentStatus === STATUS_SUCCESS;
            }   
            
        },
        methods: {
            reset() {
                this.currentStatus = STATUS_INITIAL;
                this.uploadedFiles = [];
                this.uploadError = null;
            },
            upload() {
                this.currentStatus = STATUS_SAVING;                
                uploadMultiFile(this.willbeUploaded, this.updateProgress, this.uploadIsDone);
            },
            filesChange(fileList) {
                if(!fileList.length) return;
                let array = [];

                for(let i=0; i<fileList.length; i++) {
                    let file = fileList[i];
                    file.progress = 0;
                    file.id = i;
                    array.push(file);
                }

                this.willbeUploaded = array;
                this.currentStatus = STATUS_WAITING;
            },
            removeFileFromList(name) { 
                for(let i=0; i<this.willbeUploaded.length; i++) {
                    if(this.willbeUploaded[i].name === name){
                        this.willbeUploaded.splice(i,1);
                        return;
                    }
                }
            },
            updateProgress(value, index)  {
                if(value === 100) {
                    this.currentStatus = STATUS_SUCCESS;
                }

                var newObject = this.willbeUploaded[index];
                newObject.progress = value + "%";
                Vue.set(this.willbeUploaded,index,newObject);
            },
            uploadIsDone(cannotbeuploaded) {
                console.log("Il y a des erreurs pour les fichiers suivants : ");
                console.log(cannotbeuploaded);
            },
            
        },
        mounted() {
            this.reset();
        },
        components: {
            ListFileUpload
        }
    }
</script>


<style>
  .dropbox {
    outline: 2px dashed grey;
    outline-offset: -10px;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px;
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0;
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue;
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>
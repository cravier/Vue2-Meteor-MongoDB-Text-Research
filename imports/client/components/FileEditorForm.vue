<template>
    <v-flex xs12 sm9 offset-sm1 md8 offset-md1>
        <v-text-field v-model='document.title' label="Title"></v-text-field>


        <v-subheader>Body :</v-subheader>
        <medium-editor 
            id="medium-editor"
            :text='document.body' 
            v-on:edit='applyTextEdit'
            custom-tag='div'
            :options='options'
            
        />

        <v-select
            label="Tags"
            chips
            tags
            solo
            prepend-icon="filter_list"
            append-icon=""
            clearable
            v-model="document.tags"
        >
            <template slot="selection" slot-scope="data">
                <v-chip
                    close
                    @input="removeTag(data.item)"
                    :selected="data.selected"
                >
                    <strong>{{ data.item }}</strong> 
                </v-chip>
            </template>
        </v-select>

        <v-btn color="success" id="save-button" @click="save" dark>Save</v-btn>
    </v-flex>    
</template>
<script>
    import { Meteor } from 'meteor/meteor'
    import editor from 'vue2-medium-editor'
    import { Documents } from '../../lib/collections';  

    export default {
        data: () => ({
            document: {
                title: '',
                body: '',
                tags: []
            },
            options: {
                toolbar: {
                    buttons: ['bold', 'italic','h1', 'h2', 'h3', 'quote', 'justifyLeft', 'justifyCenter','justifyRight', 'unorderedlist', 'orderedlist'],
                    diffLeft: 0,
                    diffTop: -10
                },
                placeholder: {
                    text: 'Click to edit, highlight text to display buttons'
                }
            }
        }),
        methods: {
            applyTextEdit (ev) {                
                this.document.body = ev.event.target.innerHTML
            },
            removeTag (item) {
                this.document.tags.splice(this.document.tags.indexOf(item), 1)
                this.document.tags = [...this.document.tags]
            },
            save () {
                try {
                    Meteor.call('documents.save', {
                        id: this.$route.params.id,
                        title: this.document.title,
                        body: this.document.body,
                        tags: this.document.tags
                    })
                    Bert.alert( 'Document saved', 'success', 'growl-top-right' );
                    this.$router.push('/');
                } catch(exception) {
                    console.error(exception);
                    Bert.alert( 'Error : ' + exception, 'error', 'growl-top-right' );
                }
            }
        },
        meteor: {
            $subscribe: {        
                'document' () {
                    return [this.$route.params.id]
                },
            },
            document() {
                if(this.$route.params.id) {
                    return Documents.findOne(this.$route.params.id);                              
                } else {
                    return {
                        title: '',
                        body: '',
                        tags: []
                    };
                }
            },
        },
        components: {
            'medium-editor': editor
        }
    }
</script>

<style>
    #medium-editor {
        color: black;
        font-weight: lighter;
        margin-bottom: 20px;
    }

    #save-button {
        margin-top: 20px;
    }
</style>
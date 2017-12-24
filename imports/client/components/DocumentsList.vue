<template>
    <div class="documents-list">
        <v-list two-line subheader>
         <v-list-tile avatar v-for="document in documents" v-bind:key="document.title"  @click="">
            <v-list-tile-content @click="handleModal(document)">
              <v-list-tile-title>{{ document.title }}</v-list-tile-title>
              <v-list-tile-sub-title>Tags : {{ joinTags(document.tags) }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              {{ fixedNumber(document.score)}}
              <router-link :to="{ name:'editfileform', params: { id: document._id }  }" exact>
                <v-btn icon ripple>
                    <v-icon>mode_edit</v-icon>
                </v-btn>
              </router-link>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <modal-document v-bind:openDialog="openDialog" :handleModal="handleModal.bind(null)" :document="selectedDocument"></modal-document>
    </div>
</template>



<script>
  import { Meteor } from 'meteor/meteor'
  import ModalDocument from './ModalDocument.vue';
  import { fixedNumber } from '../../modules/FilesTools';

  export default {
    name: 'documents-list',
    props: ['documents'],
    data: () => ({
      openDialog: false,
      selectedDocument: null
    }),
    methods: {
      joinTags(tags) {
        if(tags) {
          return tags.join(",")
        }

        return ""
      },
      handleModal(document) {
        this.selectedDocument = document;
        this.openDialog = !this.openDialog;
      },
      fixedNumber
    },
    computed: {},
    components: {ModalDocument}
  };
</script>
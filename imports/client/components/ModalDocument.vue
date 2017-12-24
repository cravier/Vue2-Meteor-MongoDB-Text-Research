<template>
    <v-dialog
      v-model="openDialog"
      fullscreen
      transition="dialog-bottom-transition"
      scrollable
      v-if="document"
    >
      <v-card>
          <v-toolbar style="flex: 0 0 auto;" dark class="primary">
            <v-btn icon @click.native="handleModal" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Document</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click.down="pushModify(document._id)">Edit</v-btn>
              <v-btn dark flat @click.down="deleteDoc(document._id)">Remove</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text v-html="document.body">
            
          </v-card-text>
          <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>
</template>


<script>
  import { Meteor } from 'meteor/meteor'
  import { Documents } from '../../lib/collections';
  export default {
    name: 'modal-document',
    props: ['openDialog', 'handleModal', 'document'],
    data: () => ({
      notifications: false,
      sound: true,
      widgets: false,
      overlay: false,
    }),
    watch: { 
      openDialog: function(newVal, oldVal) {
        this.dialog = newVal;
      }
    },
    methods: {
      pushModify(id) {
        this.$router.push('/edit/' + id );
      },
      deleteDoc(id) {
        try {
            Meteor.call('documents.remove', {
                id
            })
            Bert.alert( 'Document removed', 'success', 'growl-top-right' );
            this.handleModal();
        } catch(exception) {
            console.error(exception);
            Bert.alert( 'Error : ' + exception, 'error', 'growl-top-right' );
        }
      }
    }
  }
</script>
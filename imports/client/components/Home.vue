<template>
  <div class="home">
    <v-flex xs12 sm9 offset-sm1 md8 offset-md1>
      <v-text-field
              name="input-2-3"
              placeholder="Rechercher"
              class="input-group--focused"
              prepend-icon="search"
              v-model="search"
              single-line
            ></v-text-field>

        <v-subheader inset>Top results</v-subheader>
        <documents-list v-bind:documents="documents" />
    </v-flex>
  </div>
</template>


<script>
import { Meteor } from 'meteor/meteor'
import { Documents } from '../../lib/collections';
import DocumentsList from './DocumentsList.vue';

  export default {
    data () {
      return {
        search: '',
        documents: []
      }
    },
    meteor: {
      $subscribe: {        
        'documents' () {
          return [this.limit, this.search]
        }
      },
      documents() {
        return Documents.find({});          
      }
    },
    computed: {
      limit () {
        return this.search.length > 0 ? 10 : 0;
      }
    },
    components: {
      DocumentsList
    }
  };
</script>



<style scoped>
  img.logo {
    max-width: 101px;
    margin: 12px;
  }
</style>

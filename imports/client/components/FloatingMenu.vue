<template>
    <v-speed-dial
      right
      direction='bottom'
      transition='slide-y-reverse-transition'
    >
      <v-btn
        slot="activator"
        color="blue darken-2"
        dark
        fab
        hover
      >
        <v-icon>add</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <router-link :to="{ name:'newfileform' }" exact>
        <v-btn
          fab
          dark
          small
          color="indigo"
        >
          <v-icon>insert_drive_file</v-icon>
        </v-btn>
      </router-link>
      <router-link :to="{ name:'uploadform' }" exact>
        <v-btn
          fab
          dark
          small
          color="red"
        >
          <v-icon>file_upload</v-icon>
        </v-btn>
      </router-link>
    </v-speed-dial>
</template>

<script>
  import FileEditor from './FileEditorForm.vue';
</script>

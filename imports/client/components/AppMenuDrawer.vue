<template>
    <div class="app-menu-drawer">
        <v-navigation-drawer
            persistent
            v-model="drawer"
            enable-resize-watcher
            app
        >
            <v-list dense>
                <v-list-tile @click="">
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <router-link :to="{ name:'home' }" exact><v-list-tile-title>Home</v-list-tile-title></router-link>
                </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click="">
                <v-list-tile-action>
                    <v-icon>contact_mail</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <router-link :to="{ name:'about' }" exact><v-list-tile-title>About</v-list-tile-title></router-link>
                </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="green" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-toolbar>
    </div>
</template>


<script>
  export default {
    data: () => ({
      drawer: true
    }),
    props: {
    }
  }
</script>
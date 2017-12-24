<template>
    <main>
        <v-content>
            <v-flex xs12 right>
                <floating-menu></floating-menu>
            </v-flex>
            
            <v-container id="appmain-container">
                <router-view></router-view>
            </v-container>
        </v-content>
    </main>
</template>

<script>
    import FloatingMenu from './FloatingMenu.vue';

    export default {
        components: {
            FloatingMenu
        }
    }
</script>

<style>
    #appmain-container {
        margin-top: 60px;
    }
</style>
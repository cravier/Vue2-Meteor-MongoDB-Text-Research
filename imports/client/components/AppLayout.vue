<template>
  <div class="app-layout">
    <v-app>
      <app-menu-drawer></app-menu-drawer>
      <app-main></app-main>
      <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
  import AppMenuDrawer from '/imports/client/components/AppMenuDrawer.vue';
  import AppFooter from '/imports/client/components/AppFooter.vue';
  import AppMain from '/imports/client/components/AppMain.vue';

  export default {
  
    components: {
      AppMenuDrawer,
      AppFooter,
      AppMain
    }
  }
</script>

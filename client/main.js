// Libs
import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import routerFactory from '/imports/routes';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

// App layout
import AppLayout from '/imports/client/components/AppLayout.vue';

//Tracker
import VueMeteorTracker from 'vue-meteor-tracker';


Vue.use(VueMeteorTracker);
Vue.use(Vuetify)

// App start
Meteor.startup(() => {
  // Start the router
  const router = routerFactory.create();
  new Vue({
    router,
    meteor: {},
    render: h => h(AppLayout)
  }).$mount('app');
});

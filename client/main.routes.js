export default [
  {
    path: '/',
    name: 'home',
    component: '/imports/client/components/Home.vue',
  },
  {
    path: '/about',
    name: 'about',
    component: '/imports/client/components/About.vue',
  },
  {
    path: '/new',
    name: 'newfileform',
    component: '/imports/client/components/FileEditorForm.vue'
  },
  {
    path: '/upload',
    name: 'uploadform',
    component: '/imports/client/components/UploadForm.vue'
  },
  {
    path: '/edit/:id',
    name: 'editfileform',
    props: true,
    component: '/imports/client/components/FileEditorForm.vue'
  }
];

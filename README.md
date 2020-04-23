# DEPRECATED !!

# Vue2-Meteor-MongoDB-Text-Research

Simple Vue2/Meteor/MongoDB app that illustrates the index text research with content/titles and tags system of files.

<b>Please note that the app is a simple example and could be improved in many ways (features, user feedback etc). Also, this is my first project in Vue2.</b>

## Features
- Import file (.txt, .js ...) and insert the content in the database
- Create files directly from the app
- Search a file by title, tag or content

## In order to make it work, we will need a small setup :

1. You'll need a mongodb database

2. Create the following index

```javascript
db.documents.createIndex({
    title: "text",
    body: "text",
    tags: "text"
})
```

3. Setup the app
- git clone https://github.com/cravier/Vue2-Meteor-MongoDB-Text-Research.git
- meteor update
- meteor npm install
- set/export MONGO_URL=mongodb://[user]:[password]@[HOST]:[PORT]/[DATABASE]
- meteor

## Libs & Plugins used
- <a href="https://vuetifyjs.com/">Vuetifyjs</a>
- <a href="https://franzskuffka.github.io/vue-medium-editor/">Medium editor</a>

Thanks to <a href="https://github.com/ReinargJ">Reinargj</a> who introduced me in Vuejs and <a href="https://github.com/Akryum">Akryum</a> for his awesome work around Vue and Meteor.

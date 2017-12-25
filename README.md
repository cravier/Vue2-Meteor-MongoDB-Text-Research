# Vue2-Meteor-MongoDB-Text-Research

Simple Vue2/Meteor/MongoDB app that illustrate the index text research with content/titles and tags system of files.

Please note that the app is a simple example and could be improved in many ways (features, user feedback etc). 
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
git clone https://github.com/cravier/Vue2-Meteor-MongoDB-Text-Research.git
meteor update
meteor npm install
set/export MONGO_URL=mongodb://[user]:[password]@[HOST]:[PORT]/[DATABASE]

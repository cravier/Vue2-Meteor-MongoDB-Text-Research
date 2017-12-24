import { Meteor } from 'meteor/meteor';
import { Documents } from './collections';


/*
  The following Mongodb index has to be created before :
  db.documents.createIndex({
    title: "text",
    body: "text",
    tags: "text"
  })
*/

Meteor.publish('documents', function(limit, search) {

  let projection = {}
  let fields = {limit}

  if (search.length > 0) {
    projection["$text"] = {$search: search};
    fields["fields"] = {score: { $meta: "textScore" }};
    fields["sort"] = {score: { $meta: "textScore" }};
  }

  return limit > 0 ? Documents.find(projection,fields) : Meteor.ready;
});


Meteor.publish('document', function(id) {
    let projection = {_id : id}
    return Documents.find(projection);
});
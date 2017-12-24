import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Documents } from './collections'


Meteor.methods({
  ['documents.save'] (args) {
    new SimpleSchema({
      id: { type: String, optional: true},
      title: { type: String },
      body: { type: String },
      tags: { type: [String] },
    }).validate(args)

    Documents.update(
      {_id: args.id},
      {
        lastModify: new Date(),
        title: args.title,
        body: args.body,
        tags: args.tags
      },
      {
        upsert: true
      }
    )
  },

  ['documents.remove'] (args) {
    new SimpleSchema({
      id: { type: String },
    }).validate(args)

    Documents.remove(
      {_id: args.id},
    )
  }
})
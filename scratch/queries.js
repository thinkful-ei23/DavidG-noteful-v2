'use strict';

const knex = require('../knex');

// let searchTerm = 'gaga';
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (searchTerm) {
//       queryBuilder.where('title', 'like', `%${searchTerm}%`);
//     }
//   })
//   .orderBy('notes.id')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

//update
// knex
//   .from('notes')
//   .where({id: 1003})
//   .update({title: 'this should have a new title', content: 'this should have a new content'})
//   .then(result => {
//     if (result){
//       res.json(result)
//     }
//   })

const noteId = 99;
const result = [34, 56, 78].map(tagId => ({ note_id: noteId, tag_id: tagId }));
console.log(`insert: ${result} into notes_tags`);
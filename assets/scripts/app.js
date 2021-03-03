'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events')

$(() => {
  $('#post-lucky').on('submit', events.onPostLucky)
  $(document).ready(events.onIndexLuckys)
  $('#lucky-index').on('submit', events.onDeleteLucky)
  $('#update').on('submit', console.log('hi'))
  // your JS code goes here
})

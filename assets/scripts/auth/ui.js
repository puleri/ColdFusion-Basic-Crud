'use strict'

// const store = require('./../store')]
// const events = require('./events')

const onPostLuckySuccess = function () {
  $('#message').text('Added my lucky number!')
  $('#post-lucky').trigger('reset')
}
const onPostLuckyFailure = function (error) {
  $('#message').text(error.responseJSON.name + ': ' + error.responseJSON.message)
}
const onIndexLuckysSuccess = function (res) {
  const luckys = res.luckys
  $('#lucky-index').html('')
  $('#lucky-update').html('')
  luckys.forEach(function (currentLucky) {
    const luckyHTML =
    (`<form name=${currentLucky._id} class="index">
      <h6>${currentLucky.name}</h6>
      <p>${currentLucky.number}</p>
      <button type='submit' name=${currentLucky._id}>Delete</button>
      </form>`)

    const luckyUpdate =
    (`<form name=${currentLucky._id} id="update">
      <button type='submit' name=${currentLucky._id}>update</button>
      </form>`)

    $('#lucky-index').append(luckyHTML)
    $('#lucky-update').append(luckyUpdate)
  })
}
const onDeleteLuckySuccess = function () {
  $('#message').text('Luck deleted')
  $('#lucky-index').trigger('reset')
}
module.exports = {
  onPostLuckySuccess,
  onPostLuckyFailure,
  onIndexLuckysSuccess,
  onDeleteLuckySuccess
}

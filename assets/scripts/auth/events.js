'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onPostLucky = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.postLucky(data)
    .then(ui.onPostLuckySuccess)
    .catch(ui.onPostLuckyFailure)
}

const onIndexLuckys = function () {
  api.indexLuckys()
    .then(ui.onIndexLuckysSuccess)
    .catch(ui.onPostLuckyFailure)
}

const onDeleteLucky = function (event) {
  event.preventDefault()

  const form = event.target.name
  // console.log(form)
  // const formData = getFormFields(form)
  api.deleteLucky(form)
    // .then(api.indexLuckys()
    //   .then(ui.onIndexLuckysSuccess)
    //   .catch(ui.onPostLuckyFailure))
    .then(ui.onDeleteLuckySuccess)
    .catch(ui.onPostLuckyFailure)
}

module.exports = {
  onPostLucky,
  onIndexLuckys,
  onDeleteLucky
}

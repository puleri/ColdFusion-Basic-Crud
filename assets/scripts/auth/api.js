'use strict'

// const store = require('../store')
const config = require('./../config')

const postLucky = function (data) {
  return $.ajax({
    url: config.apiUrl + '/luckys',
    method: 'POST',
    data: data
  })
}
const showLucky = function (data) {
  return $.ajax({
    url: config.apiUrl + '/luckys/' + data.lucky.id,
    method: 'GET'
  })
}
const updateLucky = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/luckys/' + formData.lucky.id,
    method: 'PATCH',
    data: formData
  })
}
const deleteLucky = function (form) {
  return $.ajax({
    url: config.apiUrl + '/luckys/' + form,
    method: 'DELETE'
  })
}
const indexLuckys = function () {
  return $.ajax({
    url: config.apiUrl + '/luckys',
    method: 'GET'
  })
}
module.exports = {
  postLucky,
  showLucky,
  updateLucky,
  deleteLucky,
  indexLuckys
}

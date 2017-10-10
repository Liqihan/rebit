import Vue from 'vue'

var eventbus = new Vue()

window.eventbus = eventbus

window.e = function (name, options) {
  eventbus.$emit(name, options)
}

export default eventbus

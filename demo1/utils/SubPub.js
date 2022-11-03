let events = require('events')
if (!nw.global.eventEmitter) {
  nw.global.eventEmitter = new events.EventEmitter()
}
const SubPub = {
  on: function (eventName, cb) {
    nw.global.eventEmitter.on(eventName, cb)
  },
  emit: function (eventName, params) {
    nw.global.eventEmitter.emit(eventName, params)
  }
}
export default SubPub


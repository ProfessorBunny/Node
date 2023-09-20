const EventEmitter = require('events')

const customEmitter = new EventEmitter()



customEmitter.on('response', () => {
    console.log('hey there')
})

customEmitter.emit('response',)
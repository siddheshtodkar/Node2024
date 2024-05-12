import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()

function greet(name) {
    console.log('hello',name)
}

function bye(name) {
    console.log('bye',name)
}

// register event listeners
myEmitter.on('greetEvent', greet)
myEmitter.on('byeEvent', bye)

// emit events
myEmitter.emit('greetEvent', 'john')
myEmitter.emit('byeEvent', 'john')

// error handling
myEmitter.on('error', (err)=>{
    console.log('An error occured', err)
})

// simulate error
myEmitter.emit('error', new Error('something went wrong'))
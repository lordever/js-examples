class MyEventEmitter {
    constructor() {
        this.events = [];
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(listener);
    }

    off(event, listener) {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(l => l !== listener);
    }

    emit(event, ...args) {
        if (!this.events[event]) return;

        this.events[event].forEach((listener) => {
            listener.apply(this, args);
        })
    }
}

const emitter = new MyEventEmitter();

function onUserLogin(username) {
    console.log(`${username} logged in`);
}

emitter.on('login', onUserLogin);
emitter.emit('login', 'Alice');

emitter.off('login', onUserLogin);
emitter.emit('login', 'John')
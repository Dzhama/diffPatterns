class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(message, to) {
        chatroom.send(message, this, to);
    }

    recieve(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`)
    }

}

class Chatroom {
    constructor() {
        let users = {};
        
        return {
            register: (user) => {
                users[user.name] = user;
                user.chatroom = this;
            },
            send: (message, from, to) => {
                if(to) {
                    // single message
                    to.recieve(message, from);
                }else {
                    
                    // mass message
                    for(key in users) {
                            if(users[key] !== from) {
                                users[key].recieve(message, from);
                        }
                    }
                }
            }
        }
    }

}


const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);


brad.send("hello", sara);
brad.send("What's up", jeff);
sara.send("heloooooo");
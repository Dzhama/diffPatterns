class  EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subcribed to ${fn.name}`);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter((item) => {
            if (item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribe from ${fn.name}`);
    }

    fire() {
        this.observers.forEach(item => {
            item.call();
        });
    }
}


const click = new EventObserver();

// CLick handler

const getCurMs = () => {
    console.log(`Current MS:  ${new Date().getMilliseconds()}`);
}


const getCurS = () => {
    console.log(`Current MS:  ${new Date().getSeconds()}`);
}
// Event Listeners

document.querySelector('.sub-ms').addEventListener('click', () => {
    click.subscribe(getCurMs);
});

document.querySelector('.unsub-ms').addEventListener('click', () => {
    click.unsubscribe(getCurMs);
});

document.querySelector('.sub-s').addEventListener('click', () => {
    click.subscribe(getCurS);
});

document.querySelector('.unsub-s').addEventListener('click', () => {
    click.unsubscribe(getCurS);
});

document.querySelector('.fire').addEventListener('click', () => {
    click.fire();
});



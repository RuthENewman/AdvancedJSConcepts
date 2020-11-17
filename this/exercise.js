var b = {
    name: 'jay',
    say() {
        console.log(this);
    }
}

var c = {
    name: 'jay',
    say() {
        return function() {
            console.log(this);
        }
    }
}

var d = {
    name: 'jay',
    say() {
        return () => console.log(this);
    }
}

// logs the b object
b.say();

// logs the window object in the browser
c.say()();

// logs the d object 
d.say()();
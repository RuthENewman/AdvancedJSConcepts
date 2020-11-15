const a = function() {
    console.log('a', this)
    const b = function() {
        console.log('b', this)
        const c = {
            hi: function() {
                console.log('c', this)
            }
        }
        c.hi();
    }
    b();
}

a();

// 

const obj = {
    name: 'Charlotte',
    sing() {
        console.log('a', this);
        var anotherFunc = () => {
            console.log('b', this);
        }
        anotherFunc();
    }
}

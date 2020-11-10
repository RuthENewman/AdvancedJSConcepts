// Function expression

var murmansk = function() {
    console.log('cold');
}

// Function declaration
function kingston() {
    console.log('warm');
}

// Function invocation/call/execution
murmansk();
kingston();

function marry(person1, person2) 
{
    console.log('arguments', arguments);
    return `${person1} is now married to ${person2}`;
}

console.log(marry('luke', 'lorelai'));
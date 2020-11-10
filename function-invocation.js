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

function marry(...args) 
{
    console.log('arguments', args);
    console.log(Array.from(arguments));
    return `${args[0]} is now married to ${args[1]}`;
}

console.log(marry('luke', 'lorelai'));
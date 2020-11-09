// hoisted - global context
var favouriteFood = undefined;
var foodThoughts = undefined;

favouriteFood = "sushi";

// new execution context created
foodThoughts = function() {
    // hoisted - new execution context
    var favouriteFood = undefined;
    console.log("Original favourite food: " + favouriteFood);

    favouriteFood = "ice cream";

    console.log("New favourite food: " + favouriteFood);
}

foodThoughts();
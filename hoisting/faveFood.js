let favouriteFood = "sushi";

const foodThoughts = function() {
    console.log("Original favourite food: " + favouriteFood);

    favouriteFood = "ice cream";

    console.log("New favourite food: " + favouriteFood);
}

foodThoughts();
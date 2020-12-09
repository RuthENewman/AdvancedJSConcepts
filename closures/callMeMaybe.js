function callMeMaybe() {
    const callMe = 'Here I am';
    setTimeout(function() {
        console.log(callMe);
    }, 4000);
}

callMeMaybe();

function callMeMaybeAgain() {
    setTimeout(function() {
        console.log(callMeAgain);
    }, 5000);
    const callMeAgain = 'Here I am again';
}

callMeMaybeAgain();
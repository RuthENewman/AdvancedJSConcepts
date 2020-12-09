function callMeMaybe() {
    const callMe = 'Here I am';
    setTimeout(function() {
        console.log(callMe);
    }, 4000);
}

callMeMaybe();
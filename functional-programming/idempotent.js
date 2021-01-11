// Idempotence
function notIdempotent(num) {
    return Math.random(num);
}

notIdempotent(num);


Math.abs(-50); // idempotent
Math.abs(Math.abs(-50)); // idempotent
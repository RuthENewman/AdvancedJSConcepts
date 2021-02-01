class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'authenticationError';
        this.favouriteSnack = 'grapes';
    }
}

class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DatabaseError';
        this.favouriteSnack = 'biscoff';
    }
}

class PermissionError extends Error {
    constructor(message) {
        super(message);
        this.name = PermissionError;
        this.favouriteSnack = 'oats';
    }
}

const a = new AuthenticationError('oops');
console.log(a.favouriteSnack);
// Composition
// What it has

// many operations on fixed data
// stateless
// pure
// declarative

function addNameSire(character) {
    return Object.assign({}, character, {nameSire: () => {}});
}

function Vampire(name, firstEpisode, lastEpisode, sire) {
    let vampire = {
        name,
        firstEpisode,
        lastEpisode,
        sire
    }
}

Vampire += nameSire();

const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
const amazonasHistory = [];
const compose = (f, g) => (...args) => f(g(...args))
const purchaseItem = (...fns) => fns.reduce(compose);

purchaseItem(
    emptyCart,
    buyItem,
    addTax,
    addItemToCart
)(user, {name: "Laptop", price: 450});


function addItemToCart(user, item) {
    amazonasHistory.push(user);
    const updatedCart = user.cart.concat(item);
    return Object.assign({}, user, {cart: updatedCart });
}

function addTax(user, item) {
    amazonasHistory.push(user);
    const { cart } = user;
    const taxRate = 1.2;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    });
    return Object.assign({}, user, {cart: updatedCart });
}

function buyItem(user, item) {
    amazonasHistory.push(user);
    return Object.assign({}, user, { purchases: user.cart});
}

function emptyCart(user) {
    amazonasHistory.push(user);
    return Object.assign({}, user, {cart: []});
}

console.log(amazonasHistory);


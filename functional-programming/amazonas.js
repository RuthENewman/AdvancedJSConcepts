// Shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}
const compose = (f, g) => {...args} => f(g(...args));

purchaseItem(
    emptyCart,
    buyItem,
    addTax,
    addItemToCart
)(user, {name: "Laptop", price: 650});

function purchaseItem(...fns) {
    fns.reduce(compose);
}

const addItemToCart = (user, item) => {
    const updatedCart = user.cart.concat(item);
    return Object.assign({}, user, {cart: updatedCart });
}

const addTax = (user, item) => {
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

const buyItem = (user, item) => {
    return Object.assign({}, user, { purchases: user.cart});
}

const emptyCart = (user) => {
    user.cart = [];
    return user;
}


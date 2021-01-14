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

const purchaseItem = (...fns) => fns.reduce(compose);

const addItemToCart = (user, item) => {
    const updatedCart = user.cart.concat(item);
    return Object.assign({}, user, {cart: updatedCart });
}

const addTax = (user, item) => {
    const itemToTax = user.cart.find(itemInCart => itemInCart === item);
    itemToTax.price = (itemToTax.price * 1.03);
    return user;
}

const buyItem = (user, item) => {
    const itemInCart = user.cart.find(item => itemInCart === item);
    user.purchases = user.purchases.push(itemInCart);
    return user;
}

const emptyCart = (user) => {
    user.cart = [];
    return user;
}


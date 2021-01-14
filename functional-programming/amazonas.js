// Shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

console.log(purchaseItem(user, {name: "Laptop", price: 650}));

function purchaseItem(user, item) {
    return Object.assign({}, user, {purchases: item});
}

const addItemToCart = (user, item) => {
    user.cart = [...user.cart, item];
    return user.cart;
}

const addTax = (user, item) => {
    const itemToTax = user.cart.find(itemInCart => itemInCart === item);
    itemToTax.price = (itemToTax.price * 1.03);
    return user.cart;
}

const buyItem = (user, item) => {
    const itemInCart = user.cart.find(item => itemInCart === item);
    user.purchases = user.purchases.push(itemInCart);
    return user.purchases;
}

const emptyCart = (user) => {
    user.cart = [];
    return user;
}


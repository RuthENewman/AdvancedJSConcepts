// Shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

function addItemToCart = (user, item) => {
    user.cart = [...user.cart, item];
    return user.cart;
}

function addTax = (item) => {
    user.cart.forEach(itemInCart => {
        if (itemInCart === item) {
            itemInCart.price = (itemInCart.price * 103%);
        }
    });
}
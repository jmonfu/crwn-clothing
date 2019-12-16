import { createSelector } from 'reselect';

// 3) here we get the state that bubbles down the [state.cart] to the [selectCartItems]
const selectCart = state => state.cart;

//2) here we reference the [selectCart] which has to go above to get it
//4) we get the cart from the above and pass the cartItems to the below function
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

//1) here we reference the [selectCartItems], which has to reference the [selectCart]
//5) here we get the cartItems and do the count on these items
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
);
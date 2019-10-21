
export function addCart(product) {
    return {
        type: '@cart/ADD_CART',
        product
    }
}

export function removeCart(id) {
    return {
        type: '@cart/REMOVE_CART',
        id
    }
}
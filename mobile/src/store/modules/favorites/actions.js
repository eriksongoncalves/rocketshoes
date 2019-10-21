
export function toogleFavorite(id) {
    return {
        type: '@favorite/ADD_REMOVE',
        id
    }
}
const toggleFavorite = (id: number) => {

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id)
    } else {
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existInfavorites = (id: number): boolean => {

    if (typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
}

const getPokemons = () => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default {
    getPokemons,
    toggleFavorite,
    existInfavorites,
}
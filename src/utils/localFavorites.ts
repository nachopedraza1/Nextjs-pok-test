const toggleFavorite = (id: number) => {
<<<<<<< HEAD

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id)
=======
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id);
>>>>>>> 21acb5fa8640efaf0b2dd65fc9d11c1042a1bcf6
    } else {
        favorites.push(id)
    }

<<<<<<< HEAD
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existInfavorites = (id: number): boolean => {
=======
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existInFavorites = (id: number) => {
>>>>>>> 21acb5fa8640efaf0b2dd65fc9d11c1042a1bcf6

    if (typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
}

<<<<<<< HEAD
const getPokemons = () => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default {
    getPokemons,
    toggleFavorite,
    existInfavorites,
=======
export default {
    toggleFavorite,
    existInFavorites
>>>>>>> 21acb5fa8640efaf0b2dd65fc9d11c1042a1bcf6
}
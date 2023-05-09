import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'

import { Layout } from '@/components/layouts/Layout'
import { FavoritePokemons, NoFavorites } from '@/components/pokemon'
import { localFavorites } from '@/utils'

const FavoritesPage: NextPage = () => {

    const [favoritesPokemons, setFavoritesPokemons] = useState([]);

    useEffect(() => {
        setFavoritesPokemons(localFavorites.getPokemons());
    }, [])

    return (
        <Layout title='Pokémons - Favoritos'>

            {
                favoritesPokemons.length === 0
                    ? (<NoFavorites />)
                    : (<FavoritePokemons pokemons={favoritesPokemons} />)
            }

        </Layout>
    )
}

export default FavoritesPage;
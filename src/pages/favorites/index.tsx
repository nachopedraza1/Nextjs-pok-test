import React from 'react'
import { NextPage } from 'next'

import { Layout } from '@/components/layouts/Layout'
import { Container, Text } from '@nextui-org/react'

const FavoritesPage: NextPage = () => {
    return (
        <Layout title='Pokémons - Favoritos'>
            <Container css={{
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 100px)',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
            }}>
                <Text h1> No hay favoritos </Text>
            </Container>
        </Layout>
    )
}

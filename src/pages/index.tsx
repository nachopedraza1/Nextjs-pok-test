import { pokeApi } from "@/api"
import { Layout } from "@/components/layouts/Layout"
import { PokemonList, SinglePokemon } from "@/interfaces/interfaces"
import { Card, Grid } from "@nextui-org/react"
import { NextPage, GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"

interface Props {
  pokemons: SinglePokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {


  return (
    <Layout title="Home">
      <Grid.Container>
        {
          pokemons.map(({ id, img, name }) => (
            <Grid key={id}>
              <Link href={`/pokemon/${id}`}>
                <Card.Body>
                  <Image
                    src={img}
                    alt={name}
                    width={100}
                    height={100}
                  />
                </Card.Body>
                <Card.Footer css={{ justifyContent: "center" }}>
                  {name}
                </Card.Footer>
              </Link>
            </Grid>
          ))
        }
      </Grid.Container>
    </Layout >
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151');

  const pokemons = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage

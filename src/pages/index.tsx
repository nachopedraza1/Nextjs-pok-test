import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "@/api";
import { PokemonResponse, SmallPokemon } from "@/interfaces/pokemon-list";
import { Grid, Text } from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemons";
import { Layout } from "@/components/layouts/Layout";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout>
      <div>
        <Text h3 >HomePage</Text>

        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>

      </div>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151')
  
  const pokemons: SmallPokemon[] = data?.results.map(({ id, name, url, img }, index) => ({
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
    name,
    url
  }))
  
  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
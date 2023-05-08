import { FC } from "react"
import Link from "next/link"
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { SmallPokemon } from "@/interfaces/pokemon-list"

interface Props {
    pokemon: SmallPokemon,
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
            <Card isHoverable isPressable>
                <Link href={`/pokemon/${pokemon.id}`}>
                    <Card.Body css={{ padding: 1 }}>
                        <Card.Image
                            src={pokemon.img}
                            alt={pokemon.name}
                            width='100%'
                            css={{ height: "140px" }}
                        />
                        <Card.Footer>
                            <Row justify="space-between">
                                <Text> #{pokemon.id} </Text>
                                <Text transform="capitalize"> {pokemon.name} </Text>
                            </Row>
                        </Card.Footer>
                    </Card.Body>
                </Link>
            </Card>
        </Grid >
    )
}

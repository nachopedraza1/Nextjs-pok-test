import { FC } from "react"
import styles from "@/styles/Navbar.module.css";
import { Grid, Text, useTheme } from "@nextui-org/react";
import Link from "next/link";

export const Navbar: FC = () => {

    const { theme } = useTheme();

    return (
        <div className={styles.navbar}
            style={{
                backgroundColor: theme?.colors.red100.value
            }}
        >
            <Grid.Container alignItems="center" justify="space-between">
                <Link href="/" passHref>
                    <Text> Logo </Text>
                </Link>
                <Link href="/favorites" passHref>
                    <Text> Favoritos </Text>
                </Link>
            </Grid.Container>
        </div>
    )
}

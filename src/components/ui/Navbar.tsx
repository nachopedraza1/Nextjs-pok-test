import { FC } from "react"
import styles from "@/styles/Navbar.module.css";
import { useTheme } from "@nextui-org/react";


export const Navbar: FC = () => {

    const { theme } = useTheme();

    return (
        <div className={styles.navbar}
            style={{
                backgroundColor: theme?.colors.red100.value
            }}
        >
            Hola
        </div>
    )
}

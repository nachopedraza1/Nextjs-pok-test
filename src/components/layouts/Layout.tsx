import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui"


interface Props {
    title?: string,
    children: JSX.Element | JSX.Element[]
}

export const Layout: FC<Props> = ({ children, title }) => {

    return (
        <>

            <Head>
                <title> {title || 'Poke App'} </title>
                <meta name="author" content="Nacho pedraza" />
                <meta name="description" content="esto es una desc pa" />
                <meta name="keywords" content="text,test,value,metas" />
            </Head>

            <Navbar />

            <main className="main-container">
                {children}
            </main >

            {/* footer */}
        </>
    )
}

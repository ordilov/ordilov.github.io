import '../styles/globals.scss'
import '../styles/code.scss'
import type {AppProps} from 'next/app'
import Footer from "../components/Footer";

const GlobalStyle = ({children}: { children: any }) => {

    return (
        <>
            {children}
            <Footer />
        </>
    )
}


function MyApp({Component, pageProps}: AppProps) {
    return (
        <GlobalStyle>
            <Component {...pageProps} />
        </GlobalStyle>
    )
}

export default MyApp

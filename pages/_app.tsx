import '../styles/globals.scss'
import '../styles/code.scss'
import type {AppProps} from 'next/app'

const GlobalStyle = ({children}: { children: any }) => {

    return (
        <>
            {children}
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

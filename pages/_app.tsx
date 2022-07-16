import type {AppProps} from 'next/app'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {title} from "../lib/constants";
import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect} from "react";
import * as gtag from '../lib/gtag'

const GlobalStyle = ({children}: { children: any }) =>
    <>
        {children}
        <style jsx global>{`
          * {
            color: #AAA;
            box-sizing: border-box;
          }

          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            background: #1e1e1e;
          }

          a {
            color: #AAA;
            text-decoration: none;
          }

          main {
            background: #1e1e1e;
            min-height: 100vh;
            height: 100%;
            padding: 8rem 0 0 0;
            align-items: center;
          }

          strong {
            color: #a964a7;
          }

          code {
            color: #eb5757;
            background: #2c2c2c;
            font-weight: bold;
            font-size: 0.85rem;
            border-radius: 3px;
            padding: 0.2em 0.4em;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }

          blockquote {
            border-left: 3px solid currentcolor;
            padding-left: 1rem;
            padding-right: 1rem;
            width: 100%;
          }

          article {
            position: relative;
          }

          .hljs {
            font-size: 0.8rem;
            background: #333;
            font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            display: block;
            color: #ddd;
            border-radius: 5px;
            overflow: auto;
            padding: 1em;
            margin: 0.6em;
          }

          .hljs-doctag,
          .hljs-meta-keyword,
          .hljs-name,
          .hljs-strong {
            font-weight: bold;
          }

          .hljs-code,
          .hljs-emphasis {
            font-style: italic;
          }

          .hljs-section,
          .hljs-tag {
            color: #62c8f3;
          }

          .hljs-selector-class,
          .hljs-selector-id,
          .hljs-template-variable,
          .hljs-variable {
            color: #ade5fc;
          }

          .hljs-meta-string,
          .hljs-string {
            color: #a2fca2;
          }

          .hljs-attr,
          .hljs-quote,
          .hljs-selector-attr {
            color: #7bd694;
          }

          .hljs-tag .hljs-attr {
            color: inherit;
          }

          .hljs-attribute,
          .hljs-title,
          .hljs-type {
            color: #ffa;
          }

          .hljs-number,
          .hljs-symbol {
            color: #d36363;
          }

          .hljs-bullet,
          .hljs-template-tag {
            color: #b8d8a2;
          }

          .hljs-built_in,
          .hljs-keyword,
          .hljs-literal,
          .hljs-selector-tag {
            color: #fcc28c;
          }

          .hljs-code,
          .hljs-comment,
          .hljs-formula {
            color: #888;
          }

          .hljs-link,
          .hljs-selector-pseudo,
          .hljs-regexp {
            color: #c6b4f0;
          }

          .hljs-meta {
            color: #fc9b9b;
          }

          .hljs-deletion {
            background: #fc9b9b;
            color: #333;
          }

          .hljs-addition {
            background: #a2fca2;
            color: #333;
          }

          .hljs-operator,
          .hljs-params,
          .hljs-property,
          .hljs-punctuation {
          }

          .hljs-subst {
            color: #fff;
          }

          .hljs a {
            color: inherit;
          }

          .hljs a:focus,
          .hljs a:hover {
            color: inherit;
            text-decoration: underline;
          }

          .hljs mark {
            background: #555;
            color: inherit;
          }

        `}</style>

    </>


function App({Component, pageProps}: AppProps) {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        router.events.on('hashChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
            router.events.off('hashChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <GlobalStyle>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Blog"/>
                <meta name="google-site-verification" content="t9jriQOGsOEGOgq2XbZl6_3pnAgAIIlxYDUR8dMKeqI"/>
                <link rel="icon" href="/favicon.ico"/>
                <script async
                        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gtag.GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                    });
                `
                }}/>
            </Head>

            <Header/>
            <main>
                <h1></h1>
                <Component {...pageProps} />
            </main>
            <Footer/>
        </GlobalStyle>
    )
}

export default App

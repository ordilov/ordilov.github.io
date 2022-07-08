import type {AppProps} from 'next/app'
import Header from "../components/Header";
import Footer from "../components/Footer";

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

          /* This applies only if HTML auto-merging plugin is enabled by user (#2889) */
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


function MyApp({Component, pageProps}: AppProps) {
    return (
        <GlobalStyle>
            <Header/>
            <main>
                <Component {...pageProps} />
            </main>
            <Footer/>
        </GlobalStyle>
    )
}

export default MyApp

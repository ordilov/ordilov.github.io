import React from "react";
import css from "styled-jsx/css";

const Paragraph = css`
  .Paragraph {
    line-height: 1.625;
  }
`

const A = (props: any) => (
    <a href={props.children}>
        {props.children}
        <style jsx>{`
          a {
            color: #62c8f3;
            text-decoration: underline;
          }
        `}</style>
    </a>
)

const Heading = (props: any) => (
    <div>
        {props.children}
        <style jsx>{`
          div {
            font-size: ${props.size}pt;
            font-weight: bold;
            line-height: 1.3;
            margin-top: 2rem;
            padding-top: 0.5rem;
          }
        `}</style>
    </div>
)

const Code = (props: any) => {
    console.log(props.className + " " + props.children)
    const multiLine = (props.className || '').includes('hljs')
    return <code className={props.className}>
        {
            multiLine &&
            <div className={"carbon"}>
                <div className={"red"}/>
                <div className={"yellow"}/>
                <div className={"green"}/>
            </div>
        }
        {props.children}
        <style jsx>{`
          .carbon {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 1em;
          }

          .red {
            background: #eb5757;
            border: 0.5px solid #2c2c2c;
            width: 0.75em;
            height: 0.75em;
            margin: 0.5em 0.375em 0.5em 0;
            border-radius: 50%;
          }

          .yellow {
            background: #f9a825;
            border: 0.5px solid #2c2c2c;
            width: 0.75em;
            height: 0.75em;
            margin: 0.5em 0.375em 0.5em 0;
            border-radius: 50%;
          }

          .green {
            background: #55ef3f;
            border: 0.5px solid #2c2c2c;
            width: 0.75em;
            height: 0.75em;
            margin: 0.5em 0.375em 0.5em 0;
            border-radius: 50%;
          }
        `}</style>
    </code>

}

const MDXComponents = {
    h1: (props: any) => <Heading as="h1" size={24} {...props} />,
    h2: (props: any) => <div id={props.children}><h2 {...props} /></div>,
    h3: (props: any) => <div id={props.children}><h3 {...props} /></div>,
    h4: (props: any) => <Heading as="h4" size={16} {...props} />,
    h5: (props: any) => <Heading as="h5" size={14} {...props} />,
    h6: (props: any) => <Heading as="h6" size={12} {...props} />,
    p: (props: any) => <p className={Paragraph} {...props} />,
    a: A,
    img: (props: any) => <img className={"content"} {...props} />,
    table: (props: any) => <table {...props} />,
    code: Code
}

export default MDXComponents;
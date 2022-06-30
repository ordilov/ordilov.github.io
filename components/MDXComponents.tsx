import React from "react";
import css from "styled-jsx/css";

const Paragraph = css`
  .Paragraph {
    line-height: 1.625;
  }
`

const A = (props: any) => (
    <a>
        {props.children}
        <style jsx>{`
          a {
            color: #62c8f3;
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

const MDXComponents = {
    h1: (props: any) => <Heading as="h1" size={24} {...props} />,
    h2: (props: any) => <div id={props.children}><h2 {...props} /></div>,
    h3: (props: any) => <div id={props.children}><h3 {...props} /></div>,
    h4: (props: any) => <Heading as="h4" size={16} {...props} />,
    h5: (props: any) => <Heading as="h5" size={14} {...props} />,
    h6: (props: any) => <Heading as="h6" size={12} {...props} />,
    p: (props: any) => <p className={Paragraph} {...props} />,
    a: (props: any) => <A as={"a"} {...props}/>,
    img: (props: any) => <img className={"content"} {...props} />,
    table: (props: any) => <table {...props} />,
}

export default MDXComponents;
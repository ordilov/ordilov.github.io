import styles from '../styles/MDX.module.scss';
import React from "react";

const Heading = (props: any) => (
    <div style={{'--size': props.size + 'pt'} as React.CSSProperties} className={styles.Heading}>
        {props.children}
    </div>
)

const DocsHeading = (props: any) => (
    <Heading>
        <h2>{props.children}</h2>
    </Heading>
)

const MDXComponents = {
    h1: (props: any) => <Heading as="h1" size={24} {...props} />,
    h2: (props: any) => <div id={props.children}><h2 {...props} /> </div>,
    h3: (props: any) => <Heading as="h3" size={18} {...props} />,
    h4: (props: any) => <Heading as="h4" size={16} {...props} />,
    h5: (props: any) => <Heading as="h5" size={14} {...props} />,
    h6: (props: any) => <Heading as="h6" size={12} {...props} />,
    p: (props: any) => <p className={styles.Paragraph} {...props} />,
    a: (props: any) => <a className={styles.Link} {...props} />,
}

export default MDXComponents;
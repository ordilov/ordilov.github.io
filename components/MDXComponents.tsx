import styles from '../styles/MDX.module.scss';

const Heading = (props: any) => (
    <div className={styles.Heading}>
        {props.children}
    </div>
)

const DocsHeading = (props: any) => (
    <Heading>
        <h2>{props.children}</h2>
    </Heading>
)

const MDXComponents = {
    h1: (props: any) => <Heading as="h1" size="" {...props} />,
}

export default MDXComponents;
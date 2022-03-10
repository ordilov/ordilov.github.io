import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import CardLayout from "../components/CardLayout";
import {PostMetaData} from "../lib/types";
import {getAllPostsMetadata} from "../lib/get-all-posts-data";

const Home = ({postsMetaData}: { postsMetaData: PostMetaData[] }) => {
    return (
        <div className={styles.container}>
            <Header/>

            <main className={styles.main}>
                <CardLayout postsMetaData={postsMetaData}/>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
          </span>
                </a>
            </footer>
        </div>
    )
}

export async function getStaticProps() {
    const postsMetaData = getAllPostsMetadata();
    return {
        props: {
            postsMetaData
        }
    }
}

export default Home

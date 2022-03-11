import styles from '../styles/Home.module.scss'
import Header from "../components/Header";
import CardLayout from "../layouts/CardLayout";
import {PostMetaData} from "../lib/types";
import {getHomePostMetadata} from "../lib/mdx";
import Footer from "../components/Footer";

export default function Home({postsMetaData}: { postsMetaData: PostMetaData[] }){

    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.main}>
                <CardLayout postsMetaData={postsMetaData}/>
            </main>
            <Footer />
        </div>
    )
}

export async function getStaticProps() {
    const postsMetaData = getHomePostMetadata().slice(0, 20);
    return {
        props: {
            postsMetaData
        }
    }
}
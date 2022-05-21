import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

const About = () => {
    return (
        <div className={styles.container}>
            <Header/>

            <div className={'main'}>
                <p>개인 공부용으로 정리해둔 블로그</p>
            </div>

            <style jsx>{`
              .main {
                padding: 4rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
            `}</style>
        </div>


    );
};

export default About;
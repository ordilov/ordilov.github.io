import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

const About = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <h1>About</h1>
            <p>개인 공부용으로 정리해둔 블로그</p>
        </div>
    );
};

export default About;
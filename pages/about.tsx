import Github from "../components/Github";

export default function About() {
    return (
        <div>
            <p>개인 공부용으로 정리해둔 블로그</p>
            <Github/>
            <style jsx>{`
              div {
                text-align: center;
              }
            `}</style>
        </div>
    );
};
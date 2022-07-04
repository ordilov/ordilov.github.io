import Github from "./Github";

const Footer = () =>
    <footer>
        <span>
            <Github/>
        </span>
        <span>Copyright © Ordilov</span>
        <style jsx>{`
          footer {
            height: 6rem;
            padding: 0 2rem;
            text-align: center;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          span {
            font-size: 0.8rem;
            padding: 3rem 0;
          }

          @media (min-width: 720px) {
            footer {
              max-width: 35rem;
              padding: 0 2rem;
              margin: 0 auto;
            }
          }
        `}</style>
    </footer>
export default Footer;
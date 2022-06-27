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
            padding: 2rem 0;
          }

          @media (min-width: 720px) {
            footer {
              max-width: 50rem;
              padding: 0 2rem;
              margin: 0 auto;
            }
          }
        `}</style>
    </footer>
export default Footer;
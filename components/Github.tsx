export default function Github() {
    return (
        <a className={"github"} href={"https://github.com/ordilov"}>
            Github 🔗
            <style jsx>{`
              .github {
                display: inline-block;
                text-align: center;
                width: 8rem;
                height: 2rem;
                margin: 0 auto;
              }

              .github:hover {
                background-color: #4d4747;
                box-shadow: 0 0 0.6rem rgb(0 0 0 / 60%);
                transform: translate(0, -0.4rem);
              }
            `}</style>
        </a>
    )
}

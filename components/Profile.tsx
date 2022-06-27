import {author} from "../lib/constants";

export default function Profile({date}: { date: string }) {
    return (
        <div>
            <img src={"/profile.png"} className={"avatar"} alt={"profile"}/>
            <span>{author} / {date}</span>
            <style jsx>{`

              img {
                display: inline;
                vertical-align: middle;
              }

              span {
                color: #BBBBBB;
                padding-left: 0.5rem;
                display: inline;
                vertical-align: middle;
              }
            `}</style>
        </div>
    )
}

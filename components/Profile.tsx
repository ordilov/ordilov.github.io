import {author} from "../lib/constants";

export default function Profile({date}: { date: string }) {
    return (
        <div>
            <img src={"/profile.png"} alt={"profile"}/>
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
                font-size: 1rem;
                vertical-align: middle;
              }
            `}</style>
        </div>
    )
}

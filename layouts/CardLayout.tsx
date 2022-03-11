import Link from "next/link";
import {PostMetaData} from "../lib/types";
import cardStyles from "../styles/Card.module.scss";

const CardLayout = ({postsMetaData}: { postsMetaData: PostMetaData[] }) => {
    return (
        <div className={'card-layout'}>
            {postsMetaData.map((metadata, index: number) => {
                    return (
                        <div className='card-container' key={metadata.title}>
                                <div className='info-container'>
                                    <div className='description-container'>
                                        <Link href={`/posts/${metadata.id}`} key={metadata.title}>
                                            <a className={cardStyles.CardLink}>{metadata.title}</a>
                                        </Link>
                                        <p className='description'>{metadata.description}</p>
                                    </div>
                                </div>
                        </div>
                    )
                }
            )}
        </div>
    )
}

export default CardLayout;
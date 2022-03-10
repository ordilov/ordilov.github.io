import Link from "next/link";
import {PostMetaData} from "../lib/types";

const CardLayout = ({postsMetaData}: { postsMetaData: PostMetaData[] }) => {
    return (
        <div className={'card-layout'}>
            {postsMetaData.map((metadata, index: number) => {
                    return (
                        <div className='card-container' key={metadata.metadata.title}>
                            <div>
                                <div className='img-container'>
                                    <img src={'/images/' + metadata.metadata.imgName} alt={metadata.metadata.title}/>
                                </div>

                                <div className='info-container'>
                                    <div className='description-container'>
                                        <Link href={`/posts/${metadata.metadata.id}`} key={metadata.metadata.title}>
                                            <a className='info-container-link'>{metadata.metadata.title}</a>
                                        </Link>
                                        <p className='description'>{metadata.metadata.description}</p>
                                    </div>

                                    <div className='tags-container'>
                                        <div className='tags-container-tag'>
                                            {metadata.metadata.tags.map((tag_name, index) => {
                                                return (
                                                    <Link href={`/tags/${tag_name}`} key={tag_name}>
                                                        <a className='tag-link'>{'#' + tag_name}</a>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>

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
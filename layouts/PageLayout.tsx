import {PostMetaData} from "../lib/types";
import CardLayout from "./CardLayout";
import PageNavigation from "../components/PageNavigation";
import Category from "../components/Category";

export default function PageLayout({
                                       data,
                                       totalPages,
                                       id
                                   }: { data: PostMetaData[], totalPages: number, id: number }) {
    return (
        <div className={"container"}>
            <div className={"space"}>
                <Category/>
                <CardLayout postsMetaData={data}/>
            </div>
            <PageNavigation length={totalPages} currentPage={id}/>
            <style jsx>{`

              .space {
                display: grid;
                grid-template-columns: 25fr 50fr 25fr;
              }

              @media (min-width: 720px) {
                .container {
                  padding: 0 2rem;
                  margin: 0 auto;
                }
              }
              
            `}</style>
        </div>
    )
}


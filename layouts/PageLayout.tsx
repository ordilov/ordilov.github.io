import {PostMetaData} from "../lib/types";
import CardLayout from "./CardLayout";
import PageNavigation from "../components/PageNavigation";

export default function PageLayout({
                                       data,
                                       totalPages,
                                       id
                                   }: { data: PostMetaData[], totalPages: number, id: number }) {
    return (
        <div className={"container"}>
            <div className={"space"}>
                <CardLayout postsMetaData={data}/>
            </div>
            <PageNavigation length={totalPages} currentPage={id}/>
            <style jsx>{`
              .space {
                display: grid;
                grid-template-columns: 1fr;
              }
            `}</style>
        </div>
    )
}


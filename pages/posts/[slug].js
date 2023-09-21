import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "@/lib/posts-util";

export default function PostDetailPage({posts}){
    return (
        <PostContent post = {posts}/>
    )
}

export function getStaticProps(context){
    // const path = context.params.slug
    const { params } = context
    const { slug } = params

    const postData = getPostData(slug)

    return {
        props : {
            posts: postData
        }
    }
}


export function getStaticPaths(){
    const postFileNames = getPostFiles()

    const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''))

    return {
        paths: slugs.map((slug) => ({ params: {slug: slug}})),
        fallback: true
    }
}

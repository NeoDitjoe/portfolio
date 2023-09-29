import PostContent from '../../components/posts/post-detail/post-content' 
import { getPostData, getPostFiles } from "../../lib/posts-util"; 
import Head from "next/head";
import { Fragment } from "react";

export default function PostDetailPage(props) {
    if (!props.post) {
        return <div>Loading...</div>;
    }

    return (
        <Fragment>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.excerpt} />
            </Head>

            <PostContent post={props.post} />
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    try {
        const postData = getPostData(slug);

        if (!postData) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                post: postData,
            },
        };
    } catch (error) {
        console.error("Error fetching post data:", error);
        return {
            notFound: true, 
        };
    }
}

export async function getStaticPaths() {
    try {
        const postFileNames = getPostFiles();

        const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

        return {
            paths: slugs.map((slug) => ({ params: { slug: slug } })),
            fallback: false, 
        };
    } catch (error) {
        console.error("Error fetching post files:", error);
        return {
            paths: [],
            fallback: false,
        };
    }
}

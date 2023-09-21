import PostHeader from "./post-header";
import style from 'styles/post-content.module.css'
import ReactMarkdown from "react-markdown";

const DUMMY_POSTS = { 
    title: 'Getting started with nextJS', 
    image:'next.webp', 
    excerpt: 'Getting started with nextJS', 
    date: '2023-04-03', 
    slug: 'Getting-started-with-nextJS',
    content: '# This is a first post'
}

export default function PostContent(){

    const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`
    return (

        <article className={style.content}>
            <PostHeader title={DUMMY_POSTS.title} image={imagePath}  />
            <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown> 
        </article>
    )
}

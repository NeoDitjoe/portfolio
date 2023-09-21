import PostGrid from "./posts-grid";
import style from 'styles/all-posts.module.css'


export default function AllPosts(props){
    return (
        <section className={style.posts}>
            <h1>All Posts</h1>
            <PostGrid posts={props.posts} />
        </section>
    )
}
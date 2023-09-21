import style from 'styles/Featured-posts.module.css'
import PostGrid from '../posts/posts-grid'

export default function FeaturedPosts(props){
    return (
        <section className={style.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts={props.posts}/>
        </section>
    )
}

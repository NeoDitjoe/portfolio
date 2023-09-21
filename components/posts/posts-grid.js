import PostItem from "./post-item"
import style from 'styles/post-grid.module.css'

export default function PostGrid(props){
    const { posts } = props

    return (
        <ul className={style.grid}>
            {
                posts.map((post) => {
                    return <PostItem 
                        key = {post.slug}
                        post = {post}
                    />
                })
            }
        </ul>
    )
}
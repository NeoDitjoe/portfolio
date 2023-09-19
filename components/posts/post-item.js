import Image from "next/image";
import Link from "next/link";
import style from 'style/post-item.module.css'

export default function PostItem(){

    const { title, image, excerpt, date, slug } = props.post

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        dat: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const imagePath = `/images/posts/${slug}/${image}`

    return (
        <li className={style.post}>
            <Link>

                <div className={style.image}>
                    <Image src={imagePath} alt={title} width={400} height={400} />
                </div>

                <div className={style.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p></p>
                </div>

            </Link>
        </li>
    )
} 
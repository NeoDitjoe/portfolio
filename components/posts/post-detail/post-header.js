import Image from "next/image";
import styles from 'styles/post-header.module.css'

export default function PostHeader(props){

    const { image, title } = props

    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <Image src={image} alt={title} width={300} height={300}  />
        </header>
    )
}
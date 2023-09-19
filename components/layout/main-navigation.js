import Link from "next/link";
import Logo from "./logo";
import style from 'styles/main-navigation.module.css'

export default function MainNavigation(){
    return (
        <header className={style.header}>
            <Link href={'/'}>
                <Logo />
            </Link>

            <nav>
                <ul>
                    <li><Link href={'/posts'}>Posts</Link></li>
                    <li><Link href={'/contact'}>contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
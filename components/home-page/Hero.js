import Image from "next/image";
import style from 'styles/hero.module.css'

export default function Hero(){
    return (
        <section className={style.hero}>
            <div className={style.image}>
                <Image src={'/images/profile/profile.png'} alt="profile image" width={400} height={400}/>
            </div>

            <h1>Hi, I am Neo</h1>

            <p>welcome to my blog </p>
        </section>
    )
}
/* eslint-disable react/no-children-prop */
import PostHeader from "./post-header";
import style from 'styles/post-content.module.css'
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

export default function PostContent({post}){

    const imagePath = `/images/posts/${post.slug}/${post.image}`


    const customRenderers = {
        paragraph(paragraph) {
            const { node } = paragraph; 
            
            if (node.children[0].type === 'image') {
                const image = node.children[0];
        
                return (
                    <div className={style.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${image.url}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                            layout="responsive"
                        />
                    </div>
                );
            }
    
            return <p>{paragraph.children}</p>;
        },

        code(code) {
            const { language, value } = code;

            return (
              <SyntaxHighlighter
                style={atomDark}
                language={language}
                children={value}
              />
            );
        },
    }

    return (

        <article className={style.content}>
            <PostHeader title={post.title} image={imagePath}  />
            <ReactMarkdown components = {customRenderers}>{post.content}</ReactMarkdown> 
        </article>
    )
}   
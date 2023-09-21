import AllPosts from "@/components/posts/all-posts";
import Head from "next/head";
import { Fragment } from "react";

const DUMMY_DATA = [ 
    { 
      title: 'Getting started with nextJS', 
      image:'next.webp', 
      excerpt: 'Getting started with nextJS', 
      date: '2023-04-03', 
      slug: 'Getting-started-with-nextJS'
  
    },
  
    { 
      title: 'Getting started with nextJS1', 
      image:'next.webp', 
      excerpt: 'Getting started with nextJS1', 
      date: '2023-04-03', 
      slug: 'Getting-started-with-nextJS1'
  
    },
  
    { 
      title: 'Getting started with nextJS2', 
      image:'next.webp', 
      excerpt: 'Getting started with nextJS2', 
      date: '2023-04-03', 
      slug: 'Getting-started-with-nextJS2'
    }
  
  ]

 
 export default function AllPostsPage(){
    return (
        <Fragment>
            <Head>
                <title>Posts</title>
                <meta name="posts" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.icon" />
            </Head>

            <AllPosts posts={DUMMY_DATA}/>
        </Fragment>
    )
 }
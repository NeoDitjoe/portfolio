import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts');

export function getPostFiles() {
    try {
        return fs.readdirSync(postDirectory);
    } catch (error) {
        console.error('Error reading post directory:', error);
        return [];
    }
}

export function getPostData(postIdentifier) {
    try {
        const postSlug = postIdentifier.replace(/\.md$/, '');
        const filePath = path.join(postDirectory, `${postSlug}.md`);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);

        const postData = {
            slug: postSlug,
            ...data,
            content
        };

        return postData;
    } catch (error) {
        console.error(`Error reading post data for ${postIdentifier}:`, error);
        return null; // Return null or another appropriate value when there's an error
    }
}

export function getAllPosts() {
    try {
        const postFiles = getPostFiles();

        const allPosts = postFiles.map(postFile => {
            return getPostData(postFile);
        });

        // Filter out posts with null values (indicating errors during reading)
        const validPosts = allPosts.filter(post => post !== null);

        const sortedPosts = validPosts.sort((postA, postB) =>
            postA.date > postB.date ? -1 : 1
        );

        return sortedPosts;
    } catch (error) {
        console.error('Error getting all posts:', error);
        return [];
    }
}

export function getFeaturedPosts() {
    try {
        const allPosts = getAllPosts();

        const featuredPosts = allPosts.filter(post => post.isFeatured);

        return featuredPosts;
    } catch (error) {
        console.error('Error getting featured posts:', error);
        return [];
    }
}

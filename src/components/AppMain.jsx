import posts from "../data/posts";
import PostCard from "./PostCard";
export default function AppMain() {
    const postsPublic = posts.filter(post => post.published === true)
    console.log(postsPublic);

    return (

        <main>
            {postsPublic.map((post, index) => <PostCard key={index} title={post.title} image={post.image} content={post.content} tags={post.tags} />)}
        </main>
    )
}
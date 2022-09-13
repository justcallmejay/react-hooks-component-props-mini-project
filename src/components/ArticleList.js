import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    const articleArray = posts.map(post => {
        return <Article 
        key={post.id}
        title={post.title} 
        date={post.date} 
        preview={post.preview}
        minutes={post.minutes}
        />;
    });
   return (
    <main>
        {articleArray}
    </main>
   );
}

export default ArticleList;

// const title = posts.forEach(post => {
//     return post.title
// })
// const date = posts.forEach(post => {
//     return post.date
// })
// const preview = posts.forEach(post => {
//     return post.preview
// })

{/* <header>
<main>
    {posts.forEach(posts => <Article title={posts.title} date={posts.date} preview={posts.preview} />)}
</main>
</header> */}
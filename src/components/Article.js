import React from "react";

function Article({ minutes, title, date = "January 1, 1970", preview }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}, {minutes} min read</small>
            <p>{preview}</p>
        </article>
       );
    }
    
    export default Article;
//     const newTitle = posts.map((post) => {
//             if (post.minutes <= 30) {
//                 console.log(post.minutes / 5 * ('coffee'))
//             }
        
//         if(post.date !== undefined) {
//             return (
//                 <>
//             <h3 key={post.title}>({ post.title })</h3>
//             <small key={post.date}>({ post.date })</small>
//             <p>{post.preview}</p>
//             </>
//     )} else {
//         return (
//             <>
//         <h3 key={post.title}>({ post.title })</h3>
//         <p>{post.preview}</p>
//             </>
//     )}
// });

    // const newThing = posts.map(stuff => {
    //     if(stuff.date !== undefined) {
    // return <small>({ stuff.date })</small>
    //     }



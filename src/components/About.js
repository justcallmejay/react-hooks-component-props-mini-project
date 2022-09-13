import React from "react";

function About({ image = "https://via.placeholder.com/215", about }) {
   return (
    <header>
        <aside>
            <img src={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    </header>
   );
}

export default About;

// if (prop.img === ' ') {
//     prop.img = "https://via.placeholder.com/215"
//     }
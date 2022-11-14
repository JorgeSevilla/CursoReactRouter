import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";

function BlogPost(){
    const { slug } = useParams();
    const navigate = useNavigate();
    const blogPost = blogdata.find(post => post.slug === slug);

    const returnToBlog = () => {
        navigate('/blog');
    };
    
    return(
        <>
        <h2>{blogPost.title}</h2>
        <button onClick={returnToBlog}>Volver al Blog</button>
        <p>{blogPost.author}</p>
        <p>{blogPost.content}</p>

       
        </>
    );
}

export { BlogPost };
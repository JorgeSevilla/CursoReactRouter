import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./auth";
import { blogdata } from "./blogdata";

function BlogPost(){
    const { slug } = useParams();
    const navigate = useNavigate();
    const auth = useAuth();
    const blogPost = blogdata.find(post => post.slug === slug);
    const canDelete = auth.user?.isAdmin || blogPost.author === auth.user?.username;

    const returnToBlog = () => {
        navigate('/blog');
    };
    
    return(
        <>
        <h2>{blogPost.title}</h2>
        <button onClick={returnToBlog}>Volver al Blog</button>
        <p>{blogPost.author}</p>
        <p>{blogPost.content}</p>

        {canDelete && (
            <button>Eliminar BlogPost</button>
        )}
       
        </>
    );
}

export { BlogPost };
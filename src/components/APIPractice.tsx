import React, { useRef } from "react";
import { useState, useEffect } from "react";


// const BASE_URL = 'http://ws.audioscrobbler.com/2.0/';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

interface Post {
    id: number,
    title: string;
}

export default function APIPractice(){
    const [error, SetError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const abortControllerRef = useRef(null);

    useEffect(() => {
      const fetchPosts = async () => {
        abortControllerRef.current?.abort(); // abort the request if it exists
        abortControllerRef.current = new AbortController();


        setIsLoading(true);

        try{
            const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
                signal: abortControllerRef.current?.signal,
            });
            const posts = await response.json() as Post[];
            setPosts(posts);
        } catch (e: any) {
            if(e.name ==="AbortError"){
                console.log('aborted');
                return;
            }
            SetError(e);
        } finally {
            setIsLoading(false);
        }

        console.log(posts);
        
      }
    
      fetchPosts();
    }, [page]);
    

    if (error){
        return <div>Errorrrrrrrrrr</div>
    }

    return (
        <div className="tutorial">
            <h1 className="mb-4 text-2xl">Data Fetching</h1>
            <button onClick={() => setPage(page+1)} >Increase Page ({page})</button>
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
                <ul>
                {
                    posts.map((post) => {
                        return <li key={post.id}>{post.title}</li>
                    })
                }
                </ul>
            )}
            
        </div>
    );
}
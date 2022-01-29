import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";

import BaseLoader from "../components/BaseLoader";

function PostPage() {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const res = await PostService.getById(params.id)
        setPost(res.data)
    })
    const [fetchPostComments, isCommentsLoading, commentsError] = useFetching(async () => {
        const res = await PostService.getPostComments(params.id)
        setComments(res.data)
    })

    useEffect(() => {
        fetchPostById()
        fetchPostComments()
    }, [params])
    
    return (
        <div className="mx-auto max-w-[1000px] w-[95%] mb-10">
            <h1 className="text-3xl font-bold text-center mb-4">Страница поста</h1>
            {isLoading
                ?
                <div className="flex justify-center">
                    <BaseLoader />
                </div>
                :
                <h2 className="mb-4 text-2xl">{post.id}. {post.title}</h2>
            }
            <h2 className="text-2xl font-bold text-center mb-4">
                Коментарии
            </h2>
            {isCommentsLoading
                ?
                <div className="flex justify-center">
                    <BaseLoader />
                </div>
                :
                <div>
                {comments.map(comment => 
                    <div className="mb-4" key={comment.id}>
                        <h4 className="text-xl text-blue-500 font-semibold">{comment.email}</h4>
                        <p className="mt-2">{comment.body}</p>
                    </div>
                )}
                </div>

            }
        </div>
    )
  }
  
  export default PostPage;
  
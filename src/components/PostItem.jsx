import { useNavigate } from "react-router-dom";

function PostItem({post, remove}) {
  const navigate = useNavigate()
    return (
      <div className="rounded border-2 border-blue-500 px-6 py-3 flex justify-between items-center mt-3 gap-3">
          <div>
            <h2 className="text-2xl font-semibold">{post.id}. {post.title}</h2>
            <p className="mt-2">{post.body}</p>
          </div>
          <div className="flex gap-4">
            <button 
                className="font-bold text-blue-500" 
                onClick={() => navigate(`/posts/${post.id}`)}>
              Открыть
            </button>
            <button 
                className="font-bold text-red-500" 
                onClick={() => remove(post)}>
              Удалить
            </button>
          </div>
      </div>

    );
  }
  
  export default PostItem;
  
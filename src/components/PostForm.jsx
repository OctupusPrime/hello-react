import { useState } from 'react';
import BaseInput from './BaseInput';
import BaseButton from './BaseButton';

function PostForm({create}) {
    const [post, setPost] = useState({title: '', body: ''})

    const addPost = (e) => {
        e.preventDefault()
        create({...post, id: Date.now()})
        setPost({title: '', body: ''})
    }

    return (
        <form onSubmit={addPost} className='text-center'>
        <BaseInput 
            placeholder="Название поста" 
            value={post.title}
            onChange={e => setPost({...post, title: e.target.value})} />
        <BaseInput 
            placeholder="Описание поста" 
            value={post.body} 
            onChange={e => setPost({...post, body: e.target.value})} 
            styleName="mt-5"/>
        <BaseButton type="submit" styleName="mt-5">
          Добавить пост
        </BaseButton>
      </form>
    );
  }
  
  export default PostForm;
  
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import  PostItem from './PostItem'

function PostList({posts, title, remove, isLoading}) {

    if (!posts.length && !isLoading) 
      return (
        <h1 className='text-3xl text-center font-bold'>Посты не найдены</h1>
      )

    return (
      <div>
        <h1 className='text-3xl text-center font-bold'>
            {title}
        </h1>
        <TransitionGroup>
          {posts.map((post, index) => 
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post">
              <PostItem post={post} id={index + 1} remove={remove}/>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    );
  }
  
  export default PostList;
  
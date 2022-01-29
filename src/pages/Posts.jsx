import { useEffect, useRef, useState } from 'react';
import PostList from './../components/PostList';
import PostForm from './../components/PostForm';
import PostFilter from './../components/PostFilter';
import Modal from './../components/Modal';
import BaseButton from './../components/BaseButton';
import BaseLoader from './../components/BaseLoader';
import BaseSelect from './../components/BaseSelect';

import { usePosts } from './../hooks/usePost'
import { useFetching } from './../hooks/useFetching'
import PostService from './../API/PostService'
import { getPageCount } from './../utils/pages'
import { useObserver } from '../hooks/useObserver';

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0)
  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query)
  const lastElement = useRef()

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const res = await PostService.getAll(limit, page)
    setPosts([...posts, ...res.data])
    const totalCount = res.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts()
  }, [page, limit])

  const createPost = (post) => {
    setPosts([...posts, post])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className='mx-auto max-w-[1000px] w-[95%] my-10'>
      <BaseButton onClick={() => setModal(true)}>
        Создать пост
      </BaseButton>
      <Modal
          visible={modal}
          setVisible={setModal}>
        <PostForm create={createPost}/>
      </Modal>
      <hr className="my-6"/>
      <PostFilter
          filter={filter}
          setFilter={setFilter}/>
      <BaseSelect 
          value={limit}
          onChange={val => setLimit(val)}
          defaultVal="Кол-во элементов на странице"
          options={[
            {value: 5, title: '5'},
            {value: 10, title: '10'},
            {value: 25, title: '25'},
            {value: -1, title: 'Показать все'}
          ]}/>
      {postError &&
        <h1 className='text-3xl text-center font-bold text-red-500'>
          Произошла ошибка {postError}
        </h1>
      }
      <PostList posts={sortedAndFilteredPosts} title="Список постов" remove={removePost} isLoading={isPostLoading}/>
      {isPostLoading &&
        <div className="flex justify-center mt-6">
          <BaseLoader />
        </div>
      }
      <div ref={lastElement} className='h-[20px]'/>
    </div>
  );
}

export default Posts;

import Link from 'next/link';
import React from 'react'
import CreatePost from './CreatePost';

async function getPost() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records', 
    {cache : 'no-store'}); // 실시간으로 모든 요청을 보낼 때마다  캐시가 안되게 하고 가져오는 옵션 
  const data = await res.json();
  return data?.items as any[]
}

export default async function PostPage() {
  const posts = await getPost();

  return (
    <div>
      <h1>Posts</h1>
        {posts?.map((post) => {
          return <PostItem key = {post.id} post={post} />
        })}
        <CreatePost />
    </div>
  )
}

const PostItem = ({post} : any) => {
  const {id, title, created} = post || {};
  return (
    <Link href={`/posts/${id}`}>
      <div>
        <h3>
          {title}
        </h3>
        <p>{created}</p>
      </div>
    </Link>
  )
}

import React from 'react'
import AddPost from './AddPosts/AddPost'
import Posts from '../Posts/Posts'
import s from "./PostsBlock.module.css"
export default function PostsBlock({posts,addPost,updatePostText,newPostText}) {
	return (
		<div className={s.postsBlock}>
			<div className={s.posts}>
				My Posts
			</div>
			<AddPost addPost={addPost} updatePostText={updatePostText} newPostText={newPostText}/>
			<Posts posts={posts} />
		</div>
	)
}

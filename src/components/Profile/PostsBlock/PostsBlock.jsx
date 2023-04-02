import React from 'react'
import AddPost from './AddPosts/AddPost'
import Posts from '../Posts/Posts'
import s from "./PostsBlock.module.css"
export default function PostsBlock({posts,dispatch,newPostText,myDispatch}) {
	return (
		<div className={s.postsBlock}>
			<div className={s.posts}>
				My Posts
			</div>
			<AddPost dispatch={dispatch} newPostText={newPostText} myDispatch={myDispatch}/>
			<Posts posts={posts} />
		</div>
	)
}

import React from 'react'
import AddPost from '../PostsBlock/AddPosts/AddPost'
import Post from './Post/Post'
import s from "./Posts.module.css"
export default function Posts() {
	return (
		<div className={s.postsBlock}>
			<Post text="and i love cars" />
			<Post text="i love play football" />
			<Post text="i am web developer" />
			<Post text="Hello my name is Edgar" />
		</div>
	)
}

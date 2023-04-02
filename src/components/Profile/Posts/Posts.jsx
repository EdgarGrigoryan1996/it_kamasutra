import React from 'react'
import Post from './Post/Post'
import s from "./Posts.module.css"
export default function Posts({posts}) {

	return (
		<div className={s.postsBlock}>
			{posts.map( post => <Post key={post.id} text={post.text} />)}
		</div>
	)
}

import React from 'react'
import Post from './Post/Post'
import {postsData} from "./postsData/postsData";
import s from "./Posts.module.css"
export default function Posts() {

	return (
		<div className={s.postsBlock}>
			{postsData.map((post) => {
				return (
					<Post text={post.text} />
				)
			})}
		</div>
	)
}

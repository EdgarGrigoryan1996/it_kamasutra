import React from 'react'
import PostsBlock from './PostsBlock/PostsBlock'
import s from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo'
export default function Profile({state,addPost,updatePostText}) {
	return (
		<main>
			<div className={s.bg_image}>
				<img src="https://wallpaperaccess.com/full/3524143.jpg" alt="" />
			</div>
			<ProfileInfo />
			<PostsBlock posts={state.posts} addPost={addPost} updatePostText={updatePostText} newPostText={state.newPostText}/>
		</main>
	)
}

import React from 'react'
import PostsBlock from './PostsBlock/PostsBlock'
import s from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo'
export default function Profile() {
	return (
		<main>
			<div className={s.bg_image}>
				<img src="https://blog.paper.li/wp-content/uploads/2020/02/LinkedIn-banner-19-1024x256.png" alt="" />
			</div>
			<ProfileInfo />
			<PostsBlock />
		</main>
	)
}

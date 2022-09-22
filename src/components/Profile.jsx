import React from 'react'
import s from "./Profile.module.css"
export default function Profile() {
	return (
		<main>
			<div className='bg-image'>
				<img src="https://blog.paper.li/wp-content/uploads/2020/02/LinkedIn-banner-19-1024x256.png" alt="" />
			</div>
			<div className="profile-img-description">
				<img src="https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg" alt="" />
				<div className="description">
					description
				</div>
			</div>
			<div className="posts">
				posts
			</div>
			<div className="new-posts">
				<div className={s.item}>post1</div>
				<div className={s.item}>post2</div>
			</div>
		</main>
	)
}

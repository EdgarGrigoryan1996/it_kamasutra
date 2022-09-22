import React from 'react'
import s from "./ProfileInfo.module.css"
export default function ProfileInfo() {
	return (
		<div className={s.profile_img_description}>
			<img src="https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg" alt="" />
			<div className={s.description}>
				<div className={s.profileName}>Edgar Grigoryan</div>
				<div className={s.userInfo}>
					<div>Date of birth : 28 January</div>
					<div>City : Yerevan</div>
					<div>Education : Programming</div>
				</div>
			</div>
		</div>
	)
}

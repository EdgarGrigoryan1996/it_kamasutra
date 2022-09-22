import React from 'react'
import s from "./Navbar.module.css"
export default function Navbar() {
	return (

		<nav>
			<div><a href="#" className={`${s.item} ${s.active}`}>Home</a></div>
			<div><a href="#" className={s.item}>Messages</a></div>
			<div><a href="#" className={s.item}>Posts</a></div>
			<div><a href="#" className={s.item}>About</a></div>
			<div><a href="#" className={s.item}>Exit</a></div>
		</nav>


	)
}

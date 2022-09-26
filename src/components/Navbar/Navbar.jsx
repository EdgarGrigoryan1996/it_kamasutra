import React from 'react'
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
export default function Navbar() {
	return (

		<nav>
			<div><NavLink to="/home" className={({ isActive }) => (isActive ? `${s.active} ${s.item}` : s.item)} >Home</NavLink></div>
			<div><NavLink to="/dialogs" className={({ isActive }) => (isActive ? `${s.active} ${s.item}` : s.item)} >Messages</NavLink></div>
			<div><NavLink to="/news" className={({ isActive }) => (isActive ? `${s.active} ${s.item}` : s.item)} >News</NavLink></div>
			<div><NavLink to="/music" className={({ isActive }) => (isActive ? `${s.active} ${s.item}` : s.item)} >Music</NavLink></div>
			<div><NavLink to="/settings" className={({ isActive }) => (isActive ? `${s.active} ${s.item}` : s.item)} >Settings</NavLink></div>
		</nav>


	)
}

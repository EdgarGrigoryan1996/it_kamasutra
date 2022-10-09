import React from 'react'
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header className={s.header}>
            <NavLink to={"/home"}>
				<img src="https://media.istockphoto.com/vectors/feather-pen-and-planet-logo-combination-vector-id1352770685?k=20&m=1352770685&s=612x612&w=0&h=JRXqHjKYyX0tKls28FbRJq6TehWLkm7RXqwPc0g8uYY=" alt=""/>
			</NavLink>
        </header>
    )
}

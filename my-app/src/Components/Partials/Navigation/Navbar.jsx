import style from './Navbar.module.scss'

import { NavLink } from "react-router-dom"
const NavArr = [
    {title: 'START', path: "/"},
    {title: 'DIT CO2', path: "/Co2"},
    {title: 'CLEAN UP', path: "/CleanUp"},
    {title: 'TILMELD DIG', path: "/Tilmeld"}
]

const Nav = (props) => {
    return (
        <nav className={style.navMain}>
            <ul>
                {props.data.map((NavArr, key) => {
                    return(
                        <li key={key}><NavLink to={NavArr.path}>{NavArr.title}</NavLink></li>
                    )
                })}
            </ul>
            <div className={style.burger} onClick={() => {
                
            }}>
                <div className={style.line1}></div>
                <div className={style.line2}></div>
                <div className={style.line3}></div>
            </div>
        </nav>
    )
}

export {Nav, NavArr}
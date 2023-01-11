import style from '../Header/Header.module.scss'

import Logo from '../../Images/KT-Logo.png'
import HeroBg from '../../Images/Bg-Hero-Blue.png'


const Header = () => {
    return(
        <header className={style.headerMain}>
            <div className={style.HeorContainer}>
                <img src={HeroBg} alt="Hero-image" />
            </div>
            <div className={style.LogoContainer}>
                <img src={Logo} alt="Klima-tossen-logo" />
            </div>
        </header>
    )
}

export {Header }
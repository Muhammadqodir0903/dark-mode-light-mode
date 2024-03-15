import React, { useContext } from 'react'
import './Header.css'
import { Context } from '../../Context/Context'
// import Profil from '../../assets/img/Profil2.png'
// import Profil2 from '../../assets/img/profil.jpg'

function Header() {
    const {mode, setMode} = useContext(Context)

  return (
    <div className={mode ? "header" : "header2"}>
      <div className="container">
      
        <div className="nav">
            <ul className='nav__list'>
                <li className='nav__item'>
                <a className={mode ? "nav__btn" : "nav__btn2"}>Home</a>
                </li>
                <li className={'nav__item'}>
                <a className={mode ? "nav__btn" : "nav__btn2"}>About</a>
                </li>
                <li className='nav__item'>
                    <a className={mode ? "nav__btn" : "nav__btn2"}>Contact</a>
                </li>
                <button className={mode ? "nav__btn" : "nav__btn2"}  onClick={()=> setMode(!mode)}>☀|🌚</button>
            </ul>
        </div>
      </div>
        
    </div>
  )
  
}

export default Header
import React from 'react'
import {BsLinkedin} from'react-icons/bs'
import {FaGithub} from'react-icons/fa'
import {FaBloggerB} from'react-icons/fa'
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/yashsaxena0599/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Yashsaxenago" target="_blank"><FaGithub/></a>
        <a href="" target="_blank"><FaBloggerB/></a>
    </div>
  )
}

export default HeaderSocials
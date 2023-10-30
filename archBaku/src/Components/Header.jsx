import React from 'react'
import classes from "../classes.module.css"
import {BsTelephone} from "react-icons/bs"
import {MdOutlineMail} from "react-icons/md"
import {CiLocationOn} from "react-icons/ci"
import {BsWhatsapp} from "react-icons/bs"
import {FiFacebook} from "react-icons/fi"
import{FaLinkedinIn} from "react-icons/fa"
import {AiOutlineInstagram} from "react-icons/ai"
import archBakuMainPng from "../img/archBakuMain.png"


const Header = () => {
  return (
    <>
        <header>
            <section className={classes.ForHeaderTop}>
                <ul className={classes.listHeadertop}>
                    <li className={classes.location}><CiLocationOn /> Bakı,Azərbaycan</li>
                    <li className={classes.phone}><BsTelephone /> +994 70 905 77 05</li>
                    <li className={classes.email}><MdOutlineMail /> samu@gmail.com</li>
                </ul>
                <ul className={classes.iconListForHeaderTop}>
                    <li className={classes.whatsapIconList}><BsWhatsapp /></li>
                    <li><FaLinkedinIn /></li>
                    <li><FiFacebook /></li>
                    <li><AiOutlineInstagram /></li>
                </ul>
            </section>
            <section className={classes.ForHeaderBottom}>
                <img src={archBakuMainPng} alt="" />
                <ul className={classes.ulForHeaderBottom}>
                    <li className={classes.liForHeaderBottomStart}>Əsas səhifə</li>
                    <li className={classes.liForHeaderBottom}>Haqqımızda</li>
                    <li className={classes.liForHeaderBottom}>Layihələr</li>
                    <li className={classes.liForHeaderBottom}>Hidmətlər</li>
                    <li className={classes.liForHeaderBottom}>Vakansiyalar</li>
                    <li className={classes.liForHeaderBottom}>Xəbərlər</li>
                    <li className={classes.liForHeaderBottom}>Əlaqə</li>
                </ul>
            </section>
        </header>
    </>
)
}

export default Header

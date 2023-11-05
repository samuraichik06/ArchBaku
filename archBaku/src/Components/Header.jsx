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
                    <li className={classes.liForHeaderBottomStart}><a href="/">Əsas səhifə</a></li>
                    <li className={classes.liForHeaderBottom}><a href="/Haqqimizda">Haqqımızda</a></li>
                    <li className={classes.liForHeaderBottom}><a href="/Layiheler">Layihələr</a></li>
                    <li className={classes.liForHeaderBottom}><a href="/Xidmetler">Xidmətlər</a></li>
                    <li className={classes.liForHeaderBottom}><a href="/Vakansiyalar">Vakansiyalar</a></li>
                    <li className={classes.liForHeaderBottom}><a href="/Xeberler">Xəbərlər</a></li>
                    <li className={classes.liForHeaderBottom}><a href="/Elaqe">Əlaqə</a></li>
                </ul>
            </section>
        </header>
    </>
)
}

export default Header

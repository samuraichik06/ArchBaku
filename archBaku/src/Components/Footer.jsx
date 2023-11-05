import React from 'react'
import classes from "../classes.module.css"
import footerLogo from "../img/FooterMainlogo.png"
import {BsWhatsapp} from "react-icons/bs"
import {FiFacebook} from "react-icons/fi"
import{FaLinkedinIn} from "react-icons/fa"
import {AiOutlineInstagram} from "react-icons/ai"
import {BiRightArrow} from "react-icons/bi"
import footerimg1 from "../img/footerImg1.png"
import footerimg2 from "../img/footerImg2.png"
import footerimg3 from "../img/footerImg3.png"
import footerimg4 from "../img/footerImg4.png"
import footerimg5 from "../img/footerImg5.png"
import footerimg6 from "../img/footerImg6.png"
import footerimg7 from "../img/footerImg7.png"
import footerimg8 from "../img/footerImg8.png"


const Footer = () => {
  return (
    <>
        <footer>
            <section className={classes.FirstFooterSection}>
                <img src={footerLogo} alt="" />
                <p className={classes.firstFooterP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non velit sem est ipsum leo consequat ornare. Justo sit lacus, risus dictum.</p>
                <div className={classes.FooterIcon}>
                    <div className={classes.iconFooterDiv}><BsWhatsapp /></div>
                    <div className={classes.iconFooterDiv}><FiFacebook /></div>
                    <div className={classes.iconFooterDiv}><FaLinkedinIn /></div>
                    <div className={classes.iconFooterDiv}><AiOutlineInstagram /></div>
                </div>
            </section>
            <section className={classes.SecondFooterSection}>
                <p className={classes.SecondFooterP}>Saytın xəritəsi</p>
                <hr className={classes.hrFooter1}/>
                <ul className={classes.FooterUl}>
                    <li className={classes.FooterLi}><BiRightArrow />Əsas səhifə</li>
                    <li className={classes.FooterLi}><BiRightArrow />Haqqımızda</li>
                    <li className={classes.FooterLi}><BiRightArrow />Layihələr</li>
                    <li className={classes.FooterLi}><BiRightArrow />Xidmətlər</li>
                    <li className={classes.FooterLi}><BiRightArrow />Vakansiyalar</li>
                    <li className={classes.FooterLi}><BiRightArrow />Xəbərlər</li>
                    <li className={classes.FooterLi}><BiRightArrow />Əlaqə</li>
                </ul>
            </section>
            <section className={classes.ThirdFooterSection}>
                <p className={classes.newFooterP1}>Son layiheler</p>
                <hr className={classes.hrFooter1}/>
                <div className={classes.FooterImgDiv}>
                    <img src={footerimg1} alt="" />
                    <img src={footerimg2} alt="" />
                    <img src={footerimg3} alt="" />
                    <img src={footerimg4} alt="" />
                    <img src={footerimg5} alt="" />
                    <img src={footerimg6} alt="" />
                    <img src={footerimg7} alt="" />
                    <img src={footerimg8} alt="" />

                </div>
            </section>
            <hr className={classes.hrFooter}/>
            <div className={classes.FooterDiv}>
                <p className={classes.FooterMuellif}>© 2022 Archbaku.az. Müəllif hüquqları qorunur</p>
                <p className={classes.FooterSite}>Site by JEDAI</p>
            </div>
        </footer>
    </>
  )
}

export default Footer
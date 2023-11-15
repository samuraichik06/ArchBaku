import React from 'react'
import classes from "../classes.module.css"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {AiOutlineClose} from "react-icons/ai"
import texnikaImg1 from "../img/texnikaHelp1.png"
import texnikaImg2 from "../img/texnikaHelp2.png"
import texnikaImg3 from "../img/texnikaHelp3.png"
import texnikaImg4 from "../img/texnikaHelp4.png"




const MainThirdComp = () => {
  return (
    <>
        <section className={classes.TexnikaSection}>
            <p className={classes.MainTexnikap}>TEXNIKALAR</p>
            <hr className={classes.hrTexnika1}/>
            <div className={classes.TexnikaCard}>
                <div>
                    <img src={texnikaImg1} alt="" />
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <img src={texnikaImg2} alt="" />
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <img src={texnikaImg3} alt="" />
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <img src={texnikaImg4} alt="" />
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <button className={classes.TexnikaButton}>Hamısı <MdOutlineKeyboardArrowRight /></button>
        </section>
        <div className={classes.moduleDiv}>
            <img src={texnikaImg4} alt="" className={classes.moduleImg}/>
            <AiOutlineClose className={classes.moduleIcon1}/>
            <div className={classes.InfoModuleDiv}>
                <p className={classes.p1}>Ekskavator JCB</p>
                <p className={classes.p2}>İcarə qiymət:</p>
                <p className={classes.p3}>250 AZN/Gün</p>
                <hr className={classes.moduleHr1}/>
                <p className={classes.p3} id={classes.idp1}>6000 AZN/Ay</p>
                <div className={classes.inputModule}>
                    <p className={classes.p4}>Sifariş üçün formu doldurun</p>
                    <input type="text" placeholder='Adınız və Soyadınız*' className={classes.moduleInput}/>
                    <input type="text" placeholder='Telefon nömrəsi*' className={classes.moduleInput}/>
                    <input type="text" placeholder='Şirkətinizin adı' className={classes.moduleInput}/>
                </div>
                <button className={classes.buttonModule}>Sifariş et <MdOutlineKeyboardArrowRight /></button>
            </div>
        </div>
    </>
  )
}

export default MainThirdComp
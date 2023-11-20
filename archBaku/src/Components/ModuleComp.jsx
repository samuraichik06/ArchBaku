import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import classes from "../classes.module.css"
import texnikaImg1 from "../img/texnikaHelp1.png"
import texnikaImg2 from "../img/texnikaHelp2.png"
import texnikaImg3 from "../img/texnikaHelp3.png"
import texnikaImg4 from "../img/texnikaHelp4.png"

const ModuleComp = ({imgSrc , eksName , icareDay , icareMonth}) => {
  return (
    <>
    {
        open && (
            <div className={classes.moduleDiv}>
            <img src={imgSrc} alt="" className={classes.moduleImg}/>
            <AiOutlineClose className={classes.moduleIcon1} onClick={() => setOpen(false)}/>
            <div className={classes.InfoModuleDiv}>
                <p className={classes.p1}>{eksName}</p>
                <p className={classes.p2}>İcarə qiymət:</p>
                <p className={classes.p3}>{icareDay} AZN/Gün</p>
                <hr className={classes.moduleHr1}/>
                <p className={classes.p3} id={classes.idp1}>{icareMonth} AZN/Ay</p>
                <div className={classes.inputModule}>
                    <p className={classes.p4}>Sifariş üçün formu doldurun</p>
                    <input type="text" placeholder='Adınız və Soyadınız*' className={classes.moduleInput}/>
                    <input type="text" placeholder='Telefon nömrəsi*' className={classes.moduleInput}/>
                    <input type="text" placeholder='Şirkətinizin adı' className={classes.moduleInput}/>
                </div>
                <button className={classes.buttonModule}>Sifariş et <MdOutlineKeyboardArrowRight /></button>
            </div>
        </div>
        )
    }    
    </>

  )
}

export default ModuleComp
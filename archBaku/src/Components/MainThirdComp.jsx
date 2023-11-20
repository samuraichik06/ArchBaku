import React from 'react'
import classes from "../classes.module.css"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import texnikaImg1 from "../img/texnikaHelp1.png"
import texnikaImg2 from "../img/texnikaHelp2.png"
import texnikaImg3 from "../img/texnikaHelp3.png"
import texnikaImg4 from "../img/texnikaHelp4.png"
import ModuleComp from './ModuleComp'



const Texnika = [
    {imgSrc : "texnikaImg1" , eksName : "Ekskavator JCB" , icareDay : 250 , icareMonth : 6000},
    {imgSrc : "texnikaImg2" , eksName : "Ekskavator PSV" , icareDay : 100 , icareMonth : 3000},
    {imgSrc : "texnikaImg3" , eksName : "Ajax Ekskavator" , icareDay : 300 , icareMonth : 9000},
    {imgSrc : "texnikaImg4" , eksName : "My Ex" , icareDay : 50 , icareMonth : 1500}
]




const MainThirdComp = () => {
    const [open , setOpen] = React.useState(false)
  return (
    <>
        <section className={classes.TexnikaSection}>
            <p className={classes.MainTexnikap}>TEXNIKALAR</p>
            <hr className={classes.hrTexnika1}/>
            <div className={classes.TexnikaCard}>
                <div onClick={() => setOpen(true)}>
                    <img src={texnikaImg1} alt="" />
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div onClick={() => setOpen(true)}>
                    <img src={texnikaImg2} alt="" />
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div onClick={() => setOpen(true)}>
                    <img src={texnikaImg3} alt="" />
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div onClick={() => setOpen(true)}>
                    <img src={texnikaImg4} alt="" />
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <button className={classes.TexnikaButton}>Hamısı <MdOutlineKeyboardArrowRight /></button>
        </section>


        {
            Texnika.map(({imgSrc , eksName , icareDay , icareMonth}) =>{
                return <ModuleComp imgSrc={imgSrc} eksName={eksName} icareDay={icareDay} icareMonth={icareMonth}/>
            })
        }
    </>
  )
}

export default MainThirdComp
import React from 'react'
import classes from "../classes.module.css"
import emekdasPng1 from '../img/emekdaspng1.jpg'
import emekdasPng2 from '../img/emekdaspng2.jpg'
import emekdasPng3 from '../img/emekdaspng3.jpg'
import emekdasPng4 from '../img/emekdaspng4.png'
import emekdasPng5 from '../img/emekdaspng5.png'
import emekdasPng6 from '../img/emekdaspng6.jpg'





const EmekdasComp = () => {
  return (
    <>
        <section className={classes.EmekdasSection}>
            <p className={classes.mainEmekdasP}>ƏMƏKDAŞLAR</p>
            <div className={classes.EmekdasCards}>
                <div className={classes.emekDivchik}>
                    <img src={emekdasPng1} alt="" />
                    <div className={classes.melumatEmekdas}>
                        <p className={classes.emekdasP1}>Adil Mehdiyev</p>
                        <p className={classes.emekdasP2}>İnşaat mühəndisi</p>
                        <p className={classes.emekdasP3}>İş təcrübəsi: 2 il</p>
                    </div>
                </div>
                <div className={classes.emekDivchik}>
                    <img src={emekdasPng2} alt="" />
                    <div className={classes.melumatEmekdas}>
                        <p className={classes.emekdasP1}>Rafiq Rzayev</p>
                        <p className={classes.emekdasP2}>Texniki təhlükəsizlik üzrə mütəxəssis</p>
                        <p className={classes.emekdasP3}>İş təcrübəsi: 15 ildən çox</p>
                    </div>
                </div>
                <div className={classes.emekDivchik}>
                    <img src={emekdasPng3} alt="" />
                    <div className={classes.melumatEmekdas}>
                        <p className={classes.emekdasP1}>Rafiq Rzayev</p>
                        <p className={classes.emekdasP2}>Geodeziya üzrə mütəxəssis</p>
                        <p className={classes.emekdasP3}>İş təcrübəsi: 15 ildən çox</p>
                    </div>
                </div>
                <div className={classes.emekDivchik}>
                    <img src={emekdasPng4} alt="" />
                    <div className={classes.melumatEmekdas}>
                        <p className={classes.emekdasP1}>Rafiq Rzayev</p>
                        <p className={classes.emekdasP2}>Sahə rəisi</p>
                        <p className={classes.emekdasP3}>İş təcrübəsi: 15 ildən çox</p>
                    </div>
                </div>
                <div className={classes.emekDivchik}>
                    <img src={emekdasPng5} alt="" />
                    <div className={classes.melumatEmekdas}>
                        <p className={classes.emekdasP1}>Rafiq Rzayev</p>
                        <p className={classes.emekdasP2}>Sahə rəisi</p>
                        <p className={classes.emekdasP3}>İş təcrübəsi: 15 ildən çox</p>
                    </div>
                </div>
                <div className={classes.emekDivchik}>
                    <img src={emekdasPng6} alt="" />
                    <div className={classes.melumatEmekdas}>
                        <p className={classes.emekdasP1}>Rafiq Rzayev</p>
                        <p className={classes.emekdasP2}>Geodeziya üzrə mütəxəssis</p>
                        <p className={classes.emekdasP3}>İş təcrübəsi: 15 ildən çox</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default EmekdasComp
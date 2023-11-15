import React, { useState } from 'react'
import classes from "../classes.module.css"
import { BsArrowRightShort } from "react-icons/bs"
import { useEffect } from 'react'
import mainSeconPng from "../img/mainPng2.png"

const Main = () => {

  const [isActive, setActive] = useState()

  return (
    <>
      <section className={classes.mainFirst}>
        <p className={classes.mainpForMainFirst}>LOREM IPSUM DOLOR SIT</p>
        <p className={classes.pForMainFirst}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non velit sem est ipsum leo consequat ornare. Justo sit lacus, risus dictum. Nisi, quis orci viverra at quam porttitor et. Eu cras imperdiet nisl, feugiat lectus mi.</p>
        <div className={classes.buttonForMainFirst} >
          <p className={classes.buttonp}>Ətraflı <BsArrowRightShort /></p>
        </div>
      </section>
      <section className={classes.mainSecond}>
        <div>
          <img src={mainSeconPng} alt="" className={classes.mainSecondpng} />
          <div className={classes.dontKnowName2}></div><div className={classes.dontKnowName1}></div>
        </div>
        <div>
          <p className={classes.mainpForMainSecond}>HAQQIMIZDA</p>
          <hr className={classes.hrMainSecond} />
          <p className={classes.pForMainSecond}>Archbaku MMC 25 sentyabr 2019 cu ildən təcrübəli mütəxəssis heyəti ilə xidmət göstərən tikinti şirkətidir. İqtisadiyyatın ən önəmli sahələrindən biri olan infrastruktur sektorunda daim yeniliklərə, inkişafa önəm vermişik. 

            Bizim ən önəmli missiyamız yüksək keyfiyyətli tikinti və mühəndislik təcrübəmizdən istifadə edərək ən son texnikalarla müştərilərimizin etimadını qazanmaqdır.</p>
        </div>
      </section>
    </>
  )
}




export default Main
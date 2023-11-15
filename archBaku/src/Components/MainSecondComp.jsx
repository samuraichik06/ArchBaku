import React from 'react'
import classes from "../classes.module.css"
import { BsArrowRightShort } from "react-icons/bs"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import divchikImg1 from "../img/Construction.png"
import divchikImg2 from "../img/Construction Crane.png"
import divchikImg3 from "../img/Blueprint.png"
import divchikImg4 from "../img/excavator.png"
import divchikImg5 from "../img/Repair Tool.png"
import divchikImg6 from "../img/Eksteryer dizayner 1.png"


const MainSecondComp = () => {
  return (
    <>
      <section className={classes.sectionLayiheComp}>
        <div className={classes.topOfTheSectionLayiheComp}>
          <p className={classes.MainP2}>LAYİHƏLƏR</p>
          <button className={classes.buttonSectionLayiheComp}> <p className={classes.ButtonP1}>Hamısı<BsArrowRightShort /></p></button>
        </div>
        <div className={classes.bottomOfTheSectionLayiheComp}>
          <div className={classes.backLayihe1}>
            <div>
              <p className={classes.qaqasAdYoxdur}>Lorem ipsum dolor sit amet</p>
              <div className={classes.qaqasAdYoxdur3}>
                <p className={classes.qaqasAdYoxdur2}>Ətraflı <MdOutlineKeyboardArrowRight /></p>
              </div>
            </div>
          </div>
          <div className={classes.backLayihe2}>
          <div>
              <p className={classes.qaqasAdYoxdur}>Lorem ipsum dolor sit amet</p>
              <div className={classes.qaqasAdYoxdur3}>
                <p className={classes.qaqasAdYoxdur2}>Ətraflı <MdOutlineKeyboardArrowRight /></p>
              </div>
            </div>
          </div>
          <div className={classes.backLayihe3}>
          <div>
              <p className={classes.qaqasAdYoxdur}>Lorem ipsum dolor sit amet</p>
              <div className={classes.qaqasAdYoxdur3}>
                <p className={classes.qaqasAdYoxdur2}>Ətraflı <MdOutlineKeyboardArrowRight /></p>
              </div>
            </div>
          </div>
          <div className={classes.backLayihe4}>
          <div>
              <p className={classes.qaqasAdYoxdur}>Lorem ipsum dolor sit amet</p>
              <div className={classes.qaqasAdYoxdur3}>
                <p className={classes.qaqasAdYoxdur2}>Ətraflı <MdOutlineKeyboardArrowRight /></p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={classes.sectionLayiheComp2}>
        <p className={classes.mainPsecondComp2}>XİDMƏTLƏR</p>
        <hr className={classes.mainhsecondComp2} />
        <div className={classes.Divchik1}>
          <div className={classes.divchikChild}>
            <img src={divchikImg1} alt="" />
            <p className={classes.firstDivchikp}>Tikinti</p>
            <p className={classes.secondDivchikp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
            <p className={classes.thirdDivchikp}>Ətraflı <MdOutlineKeyboardArrowRight /></p>
          </div>
          <div className={classes.divchikChild}>
            <img src={divchikImg2} alt="" />
            <p className={classes.firstDivchikp}>Restavrasiya</p>
            <p className={classes.secondDivchikp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
            <p className={classes.thirdDivchikp}>Ətraflı <MdOutlineKeyboardArrowRight /></p>
          </div>
          <div className={classes.divchikChild}>
            <img src={divchikImg3} alt="" />  
            <p className={classes.firstDivchikp}>Layihələndirmə</p>
            <p className={classes.secondDivchikp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
            <p className={classes.thirdDivchikp}>Ətraflı <MdOutlineKeyboardArrowRight /></p>
          </div>
          <div className={classes.divchikChild}>
            <img src={divchikImg4} alt="" />
            <p className={classes.firstDivchikp}>Texnikanın icarəsi</p>
            <p className={classes.secondDivchikp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
            <p className={classes.thirdDivchikp}>Ətraflı <MdOutlineKeyboardArrowRight /></p>
          </div>
          <div className={classes.divchikChild}>
            <img src={divchikImg5} alt="" />
            <p className={classes.firstDivchikp}>Təmir</p>
            <p className={classes.secondDivchikp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
            <p className={classes.thirdDivchikp}>Ətraflı <MdOutlineKeyboardArrowRight /></p>
          </div>
          <div className={classes.divchikChild}>
            <img src={divchikImg6} alt="" />
            <p className={classes.firstDivchikp} id={classes.id1}>Eksteryer və Landşaft</p>
            <p className={classes.secondDivchikp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.</p>
            <p className={classes.thirdDivchikp}>Ətraflı <MdOutlineKeyboardArrowRight /></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainSecondComp
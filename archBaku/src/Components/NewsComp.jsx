import React from 'react'
import classes from "../classes.module.css"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { AiOutlineClockCircle } from "react-icons/ai"
import newsCard1 from "../img/newsCard1.jpg"
import newsCard2 from "../img/newsCard2.jpg"
import newsCard3 from "../img/newsCard3.jpg"
import newsCard4 from "../img/newsCard4.jpg"



const NewsComp = () => {
  return (
    <>
        <section className={classes.NewsCompSection}>
            <p className={classes.mainNewsP}>XƏBƏRLƏR</p>
            <hr className={classes.newsHr}/>
            <div className={classes.newsCards}>
                <div className={classes.newsCard}>
                    <img src={newsCard1} alt="" />
                    <p className={classes.newsCardP1}><AiOutlineClockCircle /> 05.03.2022</p>
                    <hr className={classes.newsHr2} />
                    <p className={classes.newsP3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className={classes.newsP4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus amet lectus elit ... </p>
                    <p className={classes.newsP5}>Davamı <MdOutlineKeyboardArrowRight /></p>

                </div>
                <div className={classes.newsCard}>
                    <img src={newsCard2} alt="" />
                    <p className={classes.newsCardP1}><AiOutlineClockCircle /> 05.03.2022</p>
                    <hr className={classes.newsHr2} />
                    <p className={classes.newsP3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className={classes.newsP4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus amet lectus elit ... </p>
                    <p className={classes.newsP5}>Davamı <MdOutlineKeyboardArrowRight /></p>

                </div>
                <div className={classes.newsCard}>
                    <img src={newsCard3} alt="" />
                    <p className={classes.newsCardP1}><AiOutlineClockCircle /> 05.03.2022</p>
                    <hr className={classes.newsHr2} />
                    <p className={classes.newsP3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className={classes.newsP4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus amet lectus elit ... </p>
                    <p className={classes.newsP5}>Davamı <MdOutlineKeyboardArrowRight /></p>

                </div>
                <div className={classes.newsCard}>
                    <img src={newsCard4} alt="" />
                    <p className={classes.newsCardP1}><AiOutlineClockCircle /> 05.03.2022</p>
                    <hr className={classes.newsHr2} />
                    <p className={classes.newsP3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className={classes.newsP4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus amet lectus elit ... </p>
                    <p className={classes.newsP5}>Davamı <MdOutlineKeyboardArrowRight /></p>

                </div>
            </div>
            <button>Hamısı <MdOutlineKeyboardArrowRight /></button>
        </section>
    </>
  )
}

export default NewsComp
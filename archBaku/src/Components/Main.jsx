import React from 'react'
import classes from "../classes.module.css"
import {BsArrowRightShort} from "react-icons/bs"

const Main = () => {
  return (
    <>
        <section className={classes.mainFirst}>
            <p className={classes.mainpForMainFirst}>LOREM IPSUM DOLOR SIT</p>
            <p className={classes.pForMainFirst}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non velit sem est ipsum leo consequat ornare. Justo sit lacus, risus dictum. Nisi, quis orci viverra at quam porttitor et. Eu cras imperdiet nisl, feugiat lectus mi.</p>
            <div className={classes.buttonForMainFirst}>
                <p className={classes.buttonp}>Ətraflı <BsArrowRightShort /></p>
            </div>
        </section>
    </>
  )
}

export default Main
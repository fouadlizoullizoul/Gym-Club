import React, { useState } from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonials'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
function Testimonials() {
    const [selected,setselected]=useState(0)
    const tLenght =testimonialsData.length

    const handelLeft=()=>{
      selected === 0? setselected(tLenght -1):setselected((prv)=>prv -1)
    }
    const handelRight=()=>{
      selected === tLenght -1? setselected(0):setselected((prv)=>prv +1)
    }

  return (
    <div className='Testimonials' id='Testimonials'>
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <span>{testimonialsData[selected].review}</span>
            <span>
                <span style={{color:'var(--orange)'}}>{testimonialsData[selected].name} </span>
                - {testimonialsData[selected].status}            </span>
        </div>
        <div className="right-t">
          <div></div>
          <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            <dir className='arrows'>
                <img  onClick={handelLeft} src={leftArrow} alt="" />
                <img  onClick={handelRight} src={rightArrow} alt="" />
            </dir>
        </div>
    </div>
  )
}

export default Testimonials

import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_img from '../../assets/hero_image.png'
import hero_img_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'
export default function Hero() {
  return (
    <div className='hero'>
      <div className="blur blur-h"></div>
      <div className="left-h">
            <Header/>
            {/* {the best as} */}
            <div className="the-best-add">
              <div></div>
              <span>the best fitness club in the town</span>
            </div>
            {/* {Hero heading}*/}
            <div className="hero-text">
              <div>
                <span className='stroke-text' >Shap </span>
                <span>Your</span>
              </div>
              <div><span>Ideal body</span></div>
              <div >
                <span>
                      ideal body in here we will help you to shape and build your ideal body and live up your life to fullest
                </span>
              </div>
            </div>
            {/* {figures}*/}
            <div className="figures">
              <div>
              <span>
              <NumberCounter end={140} start={100} delay='4' preFix='+'/>
              </span>
              <span>expert coachs</span>
              </div>
              <div>
              <span>
              <NumberCounter end={978} start={800} delay='4' preFix='+'/> 
              </span>
              <span>members joined</span>
              </div>
              <div>
              <span>
              <NumberCounter end={50} start={0} delay='4' preFix='+'/>
              </span>
              <span>fitness programs</span>
              </div>
            </div>
            {/* {hero button} */}
            <div className="hero-buttons">
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
            </div>
      </div>
      <div className="right-h"> 
        <button className='btn'>Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span> <span>116 bpm</span>
        </div>
        {/* {hero images} */}
        <img src={hero_img} alt="" className='hero-image' />
        <img src={hero_img_back} alt="" className='hero-image-back' />
        {/* {calories} */}
       
        <div className="calories">
           <img src={calories} alt=""  />
           <div>
          <span>Calories Burned</span>
          <span>220 kcal </span>
           </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState,useEffect } from 'react'
import { CirclePicker } from 'react-color';
import NavHeader from 'components/NavHeader/NavHeader'
import './style.scss'
function Light () {
    const [background, setBackground] = useState('#FDC755')
    const [value, setValue] = useState(20)   
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(550)
    const [menu, setMenu] = useState(1)
    const [lightHeight, setLightHeight] = useState(600)
    const [power, setPower] = useState(true)
    const handleMenulight = ()=>{
      setMenu(1)
    }
    const handleMenucolor = ()=>{
      setMenu(0)
    }
    const handleChangeComplete = (color,event) => {
        setBackground(color.hex)
      };
     const handleTouchMove = (e)=>{
       move(e)
      }
      const handleTouchUp = (e)=>{
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchUp);
      }
      const move = (e)=>{
        let y = e.offsetY - 25 || e.changedTouches[0].clientY - 300
          if(y < minValue){
            y = minValue
          } else if(y> maxValue) {
            y = maxValue
          }
          setValue(y)
      }
      const handleTouchStart= ()=>{
        window.addEventListener("touchmove",handleTouchMove)
        window.addEventListener("touchend",handleTouchUp)
      }
      
      const handleMouseMove = (e) =>{
        e.preventDefault()
        move(e)
      }  
      const handleMouseUp= (e)=>{
        e.preventDefault();
        window.removeEventListener("mousemove",handleMouseMove)
    
      }
      const handleMouseDown = (e)=>{
        e.preventDefault()
        window.addEventListener("mousemove",handleMouseMove)
        window.addEventListener("mouseup",handleMouseUp)
      }
      const handlePower= () => {
        setPower(!power)
    }
      const progress = [
        "M",
        130,
        lightHeight,
        "L",
        130,
        value
      ].join(' ')
    return (
            <div className="color-wrapper">
                <NavHeader back={true} backend="white" title="米家中央吊灯"/>
                <div className="color-menu">
                  <div className="light-mode">
                    <div onClick={handleMenulight} className={menu?"light-mode-item light-mode-active":"light-mode-item"}>亮度</div>
                    <div  onClick={handleMenucolor}  className={!menu?"light-mode-item light-mode-active":"light-mode-item"}>颜色</div>
                  </div>
                <div className="light-progress">
                    <svg width="360" height={lightHeight}>
                    <defs>
                            <filter id="dropShadow" filterUnits="userSpaceOnUse">
                               <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                               <feOffset dx="5" dy="2" />
                               <feComponentTransfer>
                                   <feFuncA type="linear" slope="0.3" />
                               </feComponentTransfer>
                               <feMerge>
                                   <feMergeNode />
                                   <feMergeNode in="SourceGraphic" />
                               </feMerge>
                           </filter>
                    </defs>
                    <rect  width="310" height={lightHeight}  fill="#dbdbdb"/>  
                    <path   d={progress} strokeWidth="360"   stroke={background}/>  
                    <rect  x="0" y={value} rx="10" fill="#fff" ry="10" width="310" height="50" onMouseDown={handleMouseDown} onTouchStart={handleTouchStart} filter="url(#dropShadow)" />
                    </svg>
                </div>
                <div  className={!menu?"sub-menu colorPicker":"hide-menu"}> 
                <CirclePicker
                circleSize={48}
                circleSpacing={20}
                colors={["#FDC755", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50"]}
                onChange={ handleChangeComplete }
                />
                </div>
                <div className={menu?"sub-menu switch":"hide-menu"}>
                  <div className={power?"light-power on":"light-power off"} onClick={()=>{handlePower()}}>
                  <div className="power-icon"></div>
                  </div>
                </div>
                <div className={menu?"light-text":"hide-menu"}>
                  {Math.ceil((maxValue - value)/maxValue *100 )}%
                </div>
                </div>
            </div>
        )
    
}

export default Light
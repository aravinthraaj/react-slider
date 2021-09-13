import React, { useState } from 'react'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow/Arrow'
// import Dots from './Dots'



const SliderCSS ={
  position: "relative",
  height:"400px",
  width: "100vw",
  margin: "0 auto",
  overflow: "hidden",

}


function Slider(props) {
  

  const getWidth = () => window.innerWidth

  const [Style, setStyle] = useState({
    activeIndex:0,
    translate:0,
    transition:1
  })

  const {activeIndex,translate,transition} = Style

  const nextSlide = () => {
    if(activeIndex === props.slides.length - 1) {
      return setStyle({
        ...Style,
        translate:0,
        activeIndex:0
      })
    }

    setStyle({
      ...Style,
      activeIndex: activeIndex + 1,
      translate:(activeIndex + 1) * getWidth()
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setStyle({
        ...Style,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1
      })
    }

    setStyle({
      ...Style,
      activeIndex: activeIndex - 1,
      translate:(activeIndex - 1) * getWidth()
    })
  }



  return (
    <div style={SliderCSS}>
    <SliderContent
      translate={translate}
      transition={transition}
      width={getWidth() * props.slides.length}
    >
      {props.slides.map((slide, i) => (
        <Slide key={slide + i} content={slide} />
      ))}
    </SliderContent>

    <Arrow direction="left" handleClick={prevSlide} />
    <Arrow direction="right" handleClick={nextSlide} />

    {/* <Dots slides={props.slides} activeIndex={activeIndex} /> */}
  </div>
  )
}

export default Slider

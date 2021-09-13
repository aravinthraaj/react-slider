import React from 'react'

function SliderContent(props) {

  const myStyles = {
    transform:`translateX(-${props.translate}px)`,
    transition:`transform ease-out 1.2s`,
    // transition:`transform ease-out ${props.transition}`,
    height:`400px`,
    width:`${props.width}px`,
    display:`flex`
  }
  return (
    <div style={myStyles}>
      {props.children}
    </div>
  )
}

export default SliderContent

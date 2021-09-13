
import React from 'react'
import './style.scss'
// import { css, jsx } from '@emotion/react'
import leftArrow from '../../img/left-arrow.svg'
import rightArrow from '../../img/right-arrow.svg'

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    className={`arrow ${direction}`} 
  >
    {direction === 'right' ? <img src={rightArrow} alt="right"/> : <img src={leftArrow} alt="left"/>}
  </div>
)

export default Arrow
import React from 'react'

function Slide({content}) {
  const myStyle={
  height:"100",
  width:"100%",
  // display:"flex",
  backgroundImage:`url(${content})`,
  backgroundSize:`cover`,
  backgroundRepeat:`no-repeat`,
  backgroundPosition:`center`
}

// const box1 ={
// height:"100px",
// width:"100px",
// backgroundColor:"#eee111",
// padding:"20px",
// margin:"30px"

// }
// const box2 ={
//   height:"100px",
//   width:"100px",
//   backgroundColor:"#ef1111",
//   padding:"20px",
// margin:"30px"
//   }
  return (
    <div style={myStyle}>
      {/* <div style={box1}>
        <h1>Test 1</h1>
      </div>
      <div style={box2}>
        <h1>Test 2</h1>
      </div>
      <div style={box1}>
        <h1>Test 3</h1>
      </div>
      <div style={box2}>
        <h1>Test 4</h1>
      </div>
      <div style={box1}>
        <h1>Test 5</h1>
      </div> */}
    </div>
  )
}

export default Slide

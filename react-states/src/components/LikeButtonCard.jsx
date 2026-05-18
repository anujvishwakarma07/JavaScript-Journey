// import React, { useState } from 'react'

// const LikeButtonCard = () => {
//     const [isLiked, setIsLiked] = useState(false);
//     const toggle = () => {
//         setIsLiked(!isLiked);
//         console.log(isLiked);
//     }
//     const style = {
//         color : "red",
//     }
//     return (
//         <div>
//             <p onClick={toggle}>
//                 {
//                     isLiked ? <i class="fa-solid fa-heart like-btn" style={style}></i> :  <i className="fa-regular fa-heart"></i>
//                 }
               
//             </p>
//         </div>
//     )
// }

// export default LikeButtonCard       


// // Componenet re-rendering
// import React, { useState } from 'react'

// const LikeButtonCard = () => {
//     const [count, setCount] = useState(0);
//     console.log("Component is re-rendered");
//     console.log(`count : ${count}`);
//     const counter = () => {
//         setCount(count + 1);
//         console.log(`new value of count : ${count}`);
//     }
//   return (
//     <div>
//         <p>count : {count}</p>
//         <button onClick={counter}>increase count : {count}</button>
//     </div>
//   )
// }

// export default LikeButtonCard

import { useState } from "react";

import React from 'react'

const LikeButtonCard = () => {
  // const [count, setCount] = useState(0);
  // we can also pass callback function as a initial state
  const random = () => {
    console.log('random is exicuted');
    return Math.random();
  }
  const [count , setCount] = useState(random);
  const counter = () => {
    setCount((currCount)=> {
      return currCount + 1;
    })

  }
  return (
    <div>
      <p>Count is : {count}</p>
      <button onClick={counter}>increase count : {count}</button>
    </div>
  )
}

export default LikeButtonCard
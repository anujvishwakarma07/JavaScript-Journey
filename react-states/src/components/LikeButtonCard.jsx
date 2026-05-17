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



import React, { useState } from 'react'

const LikeButtonCard = () => {
    const [count, setCount] = useState(0);
    console.log("Component is re-rendered");
    console.log(`count : ${count}`);
    const counter = () => {
        setCount(count + 1);
        console.log(`new value of count : ${count}`);
    }
  return (
    <div>
        
    </div>
  )
}

export default LikeButtonCard
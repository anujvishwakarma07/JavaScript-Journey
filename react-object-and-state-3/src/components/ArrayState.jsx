import React, { useState } from 'react'

const ArrayState = () => {
    const [arr, setArr] = useState(["Nancy Jewel Macdonie"]);
    const addElementOnArray = () =>{
        setArr((currArray) => {
            const updatedArray =  [...currArray, "Yun see yon"];
            console.log(updatedArray);
            return updatedArray;
        });
        
    }
    
  return (
    <div>
        <p>Current Array : {arr.join("  +  ")}</p>
        <button onClick={addElementOnArray}>Add New Array</button>
    </div>
  )
}

export default ArrayState


// import React, { useState } from 'react'

// const ArrayState = () => {
//     const [arr, setArr] = useState(["Yun see yun"]);

//     const addElementOnArray = () => {
//         arr.push("Nancy jewewl Macdonie");
//         setArr(arr);
//         console.log(arr);
//     }
//   return (
//     <div>
//         <p>here is our array : {arr}</p>
//         <button onClick={addElementOnArray}>add new element</button>
//     </div>
//   )
// }

// export default ArrayState
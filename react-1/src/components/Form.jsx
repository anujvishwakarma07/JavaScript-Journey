import React from 'react'

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form is submitted");
        console.log(event.target.elements.name.value);
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" id="" placeholder='Enter your name' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form
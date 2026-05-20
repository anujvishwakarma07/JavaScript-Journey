import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [fullName, setFullName] = useState("Anuj Vishwakarma");
    const handleSubmit = (event) => {
        setFullName(event.target.value);
    }

    const [formData, setFormData] = useState({
        userName: "",
        rollNumber: "",
        subject: "",
        subjectCode: ""
    });

    const handleFormData = (event) => {
        let fieldName = event.target.name;
        let newData = event.target.value;
        setFormData((currData) => {
            // currData[fieldName] = newData;
            // return { ...currData,  [fieldName] : newData}; 
            //we can write it like this - 
            return { ...currData,  [event.target.name] : event.target.value}; 
        })
        // console.log(event.target.name)
        // console.log(event.target.value)
    }

    const handleFormSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            userName: "",
            rollNumber: "",
            subject: "",
            subjectCode: ""
        })
    }

    return (
        <div>
            <form action="" onSubmit={handleFormSubmit}>
                <label htmlFor="username">username</label>
                <input type="text" placeholder='Enter Your Username' value={formData.userName} name='userName' onChange={handleFormData} id='username' />
                &nbsp;        &nbsp;        &nbsp;
                <label htmlFor="rollNumber">Roll Number</label>
                <input type="text" placeholder='Enter your Roll Number' name='rollNumber' id='rollNumber' value={formData.rollNumber} onChange={handleFormData} />
                <label htmlFor="sibject">Subject</label>
                <input type="text" name='subject' id='subject' placeholder='Enter Your Subject' value={formData.subject} onChange={handleFormData} />
                <label htmlFor="subjectCode">Subject Code</label>
                <input type="text" name='subjectCode' id='subjectCode' placeholder='Enter your Subject Code' value={formData.subjectCode} onChange={handleFormData} />
                &nbsp;        &nbsp;        &nbsp;&nbsp;        &nbsp;        &nbsp;
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
import { useState } from 'react'
import { useFormik } from 'formik';

const CommentFrom = ({addComment}) => {
    const [formData, setFormData] = useState({
        username: "",
        comment: "",
        rating: 5,
    })
    const [showData, setShowData] = useState([]);

    const handleFormData = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        })
    }

    const handleFormSubmit = (event) => {
        console.log(formData);
        addComment(formData);
        event.preventDefault();
        setFormData({
            username: "",
            comment: "",
            rating: 5,
        })
    }
    
    return (
        <div>
            <h3 className="commentFormTitle">Comment Form</h3>
            <form className="commentForm" action="" onSubmit={handleFormSubmit}>
                <div className="field">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        name="username"
                        value={formData.username}
                        id="username"
                        onChange={handleFormData}
                    />
                </div>

                <div className="field">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        name="comment"
                        id="comment"
                        placeholder="Enter the message"
                        value={formData.comment}
                        onChange={handleFormData}
                    />
                </div>

                <div className="field">
                    <label htmlFor="rating">Rating</label>
                    <input
                        type="number"
                        id="rating"
                        placeholder="Give Rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleFormData}
                        min={1}
                        max={5}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CommentFrom
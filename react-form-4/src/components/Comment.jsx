import React from 'react'
import { useState } from 'react'
import CommentFrom from './CommentFrom'
import './Comment.css'

const Comment = () => {
    const [comments, setComments] = useState([{
        username: 'naruto Uzumaki',
        comment: "Hinata is very supportive Girl",
        rating: 5,
    }])

    const addComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
    }
    return (
        <div className="commentPage">
            <h3 className="commentHeading">Comments</h3>
            <div className="commentList">
                {
                    comments.map((comment, idx) => (
                        <div className="commentCard" key={idx}>
                            <p><span className="commentLabel">Username:</span> {comment.username}</p>
                            <p><span className="commentLabel">Comment:</span> {comment.comment}</p>
                            <p><span className="commentLabel">Rating:</span> {comment.rating}</p>
                        </div>
                    ))
                }
            </div>

            <div className="commentFormWrap">
                <CommentFrom addComment={addComment} />
            </div>
        </div>


    )
}

export default Comment
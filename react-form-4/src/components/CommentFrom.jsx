import { useFormik } from 'formik';

const CommentFrom = ({ addComment }) => {
    // const [formData, setFormData] = useState({
    //     username: "",
    //     comment: "",
    //     rating: 5,
    // })

    const validate = values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Required';
        }

        if (!values.comment) {
            errors.comment = 'Required';
        }

        if (!values.rating) {
            errors.rating = 'Required';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            comment: '',
            rating: '5',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    // const handleFormData = (event) => {
    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value };
    //     })
    // }

    // const handleFormSubmit = (event) => {
    //     console.log(formData);
    //     addComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username: "",
    //         comment: "",
    //         rating: 5,
    //     })
    // }

    return (
        <div>
            <h3 className="commentFormTitle">Comment Form</h3>
            <form className="commentForm" action="" onSubmit={formik.handleSubmit}>
                <div className="field">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        name="username"
                        value={formik.values.username}
                        id="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.touched.username && formik.errors.username ? 'invalid' : ''}
                        aria-invalid={Boolean(formik.touched.username && formik.errors.username)}
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <div className="fieldError">{formik.errors.username}</div>
                    ) : null}
                </div>
                <div className="field">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        name="comment"
                        id="comment"
                        placeholder="Enter the message"
                        value={formik.values.comment}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.touched.comment && formik.errors.comment ? 'invalid' : ''}
                        aria-invalid={Boolean(formik.touched.comment && formik.errors.comment)}
                    />
                    {formik.touched.comment && formik.errors.comment ? (
                        <div className="fieldError">{formik.errors.comment}</div>
                    ) : null}
                </div>

                <div className="field">
                    <label htmlFor="rating">Rating</label>
                    <input
                        type="number"
                        id="rating"
                        placeholder="Give Rating"
                        name="rating"
                        value={formik.values.rating}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        min={1}
                        max={5}
                        className={formik.touched.rating && formik.errors.rating ? 'invalid' : ''}
                        aria-invalid={Boolean(formik.touched.rating && formik.errors.rating)}
                    />
                    {formik.touched.rating && formik.errors.rating ? (
                        <div className="fieldError">{formik.errors.rating}</div>
                    ) : null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CommentFrom
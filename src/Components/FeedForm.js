import React, { useState, useContext, useEffect } from 'react';
import Card from './Common/Card';
import Button from './Common/Button';
import Ratings from './Ratings';
import FeedContext from '../Context/FeedContext';


function FeedForm() {
    const [text, setText] = useState('');
    const [ratings, setRatings] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const feedbackContext = useContext(FeedContext);

    const isEdit = feedbackContext.feedBackEdit.edit;

    useEffect(() => {
        if (isEdit === true) {
            setRatings(feedbackContext.feedBackEdit.item.ratings);
            setText(feedbackContext.feedBackEdit.item.text);
            setBtnDisabled(false);
        }
    }, [feedbackContext.feedBackEdit])

    const handleTextChange = (e) => {
        setText(e.target.value);
        if (e.target.value === '') {
            console.log("first")
            setBtnDisabled(true);
            setMessage('');
        }
        else if (e.target.value !== '' && text.trim().length <= 15) {
            console.log("in")
            setBtnDisabled(true);
            setMessage("Text must be atleast 15 Characters")
        }
        else {
            setMessage(null);
            setBtnDisabled(false);
        }
    }




    const handleFormSumbit = (e) => {
        e.preventDefault();
        if (text.trim().length > 2) {
            const newFeedback = {
                text,
                ratings,
            }

            if (isEdit) {
                feedbackContext.updateFeedBack(feedbackContext.feedBackEdit.item.id, newFeedback);
                setText('');

            }
            else {
                feedbackContext.addFeedback(newFeedback);

            }

        }
    }
    return (
        <Card>
            <form onSubmit={handleFormSumbit}>
                <h2> Please enter your feedback</h2>
                <Ratings handleSelect={setRatings} selected={ratings} />
                <div className='input-group'>
                    <input type={text} onChange={handleTextChange} value={text} />
                    <Button type='submit' version='secondary' isDisabled={btnDisabled}>
                        {isEdit ? `Edit` : `Add`}
                    </Button>
                </div>
                <div className={'message'}>
                    {message}
                </div>
            </form>
        </Card>

    )
}

export default FeedForm
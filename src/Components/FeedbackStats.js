import React, { useContext } from 'react';
import FeedContext from '../Context/FeedContext';

function FeedbackStats(props) {
    const feedbackContext = useContext(FeedContext);
    let average = Math.round(feedbackContext.feedBack.reduce((acc, curr) => {
        return acc + curr.ratings
    }, 0) / feedbackContext.feedBack.length);



    return (
        <div className='feedback-stats'>
            <h4>
                {feedbackContext.feedBack.length} reviews
            </h4>
            <h4>
                Average rating: {isNaN(average) ? 0 : average}
            </h4>

        </div>

    )
}


export default FeedbackStats
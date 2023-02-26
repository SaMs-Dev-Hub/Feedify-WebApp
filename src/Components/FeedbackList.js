import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import FeedItems from './FeedItem';
import FeedContext from '../Context/FeedContext';

function FeedbackList(props) {

    // for contextApi
    const feedbackContext = useContext(FeedContext);
    if (!feedbackContext.feedBack) return (
        <div>
            No present
        </div>
    )

    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedbackContext.feedBack.map((item) => (
                    <motion.div key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <FeedItems item={item} key={item.id} editFeedBack={() => feedbackContext.editFeedBack(item)} handleDelete={() => feedbackContext.handleDelete(item)} />
                    </motion.div>
                ))}
            </AnimatePresence>

        </div>
    )

}

export default FeedbackList;
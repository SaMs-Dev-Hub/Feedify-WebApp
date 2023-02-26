import { createContext, useState } from 'react';
import feedbackData from '../data/Feeds';
import { v4 as uuidv4 } from 'uuid';


const FeedContext = createContext();

export const FeedProvider = (props) => {
    const [feedBack, setFeedback] = useState(feedbackData);
    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false,
    })

    const addFeedback = (value) => {
        value.id = uuidv4();
        console.log(value);
        setFeedback([...feedBack, value]);

    }
    const handleDelete = (value) => {

        const newFeed = feedBack.filter((item) => item !== value);
        setFeedback(newFeed);

    }

    const editFeedBack = (item) => {
        setFeedBackEdit({
            item,
            edit: true
        })
    }

    const updateFeedBack = (id, value) => {
        console.log('updating', id, value);
        setFeedback(feedBack.map((item) => item.id === id ? { ...item, ...value } : item));
        setFeedBackEdit({
            item: {},
            edit: false,
        })

    }





    return (
        <FeedContext.Provider value={{
            feedBack,
            handleDelete,
            addFeedback,
            editFeedBack,
            feedBackEdit,
            updateFeedBack,
        }}>
            {props.children}
        </FeedContext.Provider>


    )
}

 

export default FeedContext;

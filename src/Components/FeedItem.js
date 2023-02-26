import React from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';

import Card from './Common/Card';


const FeedItems = (props) => {

    return (
        <Card>
            <div className='num-display'>
                {props.item.ratings}

            </div>
            <button className='close' onClick={() => props.handleDelete(props.item)}>
                <FaTimes color='black' />
            </button>
            <button className='edit' onClick={() => props.editFeedBack(props.item)}>
                <FaEdit color='black' />
            </button>
            <div className='text-display'>
                {props.item.text}

            </div>



        </Card>

    )
}

export default FeedItems

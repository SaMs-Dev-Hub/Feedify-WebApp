import React from 'react';
import PropTypes from 'prop-types';

const FeedHeader = ({ text }) => {

    return (
        <header style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', color: '#ff6a95' }}>
            <div className='container '>
                <h1>
                    {text}
                </h1>
            </div>
        </header>
    )
}

FeedHeader.defaultProps = {
    text: 'Feedify'
}

FeedHeader.propTypes = {
    text: PropTypes.string
}



export default FeedHeader;
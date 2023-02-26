import React from 'react'
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutIcon() {
    return (
        <div className='about-link'>
            <Link to='/about' style={{ textDecoration: 'none' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <h1 style={{ marginTop: -10, marginRight: 5, }}>
                        About </h1>
                    <FaQuestion size={30} />
                </div>
            </Link>

        </div>
    )
}

export default AboutIcon
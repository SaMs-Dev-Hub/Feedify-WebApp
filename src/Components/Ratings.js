import React from 'react'


function Ratings(props) {

    const handleChange = (e) => {
        props.handleSelect(+e.currentTarget.value)
    }

    return (
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                    <input
                        type='radio'
                        id={`num${i + 1}`}
                        name='rating'
                        value={i + 1}
                        onChange={handleChange}
                        checked={props.selected === i + 1}
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
    )
}

export default Ratings
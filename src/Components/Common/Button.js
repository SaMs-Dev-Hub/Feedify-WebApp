import React from 'react';


function Button(props) {
    return (
        <button type={props.type} disabled={props.isDisabled} className={`btn btn-${props.version}`}>
            {props.children}
        </button>
    )
}


Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isDisabled: false,
}
export default Button
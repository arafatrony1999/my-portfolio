import React from 'react'

const SmallText = (props) => {
    return (
        <div className="small-text">
            {props.normal} <span className='colored-span'>{props.colored}</span>
        </div>
    )
}

export default SmallText
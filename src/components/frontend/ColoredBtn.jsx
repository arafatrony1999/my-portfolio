import React from 'react'
import { Link } from 'react-router-dom'

const ColoredBtn = (props) => {
    return (
        <Link to={props.btnLink} className='my-btn colored-btn'>
            {props.btnText}
        </Link>
    )
}

export default ColoredBtn
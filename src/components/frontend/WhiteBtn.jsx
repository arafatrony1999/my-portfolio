import React from 'react'
import { Link } from 'react-router-dom'

const WhiteBtn = (props) => {
    return (
        <Link to={props.btnLink} className='my-btn white-btn'>
            {props.btnText}
        </Link>
    )
}

export default WhiteBtn
import React from 'react'
import { Link } from 'react-router-dom'

const OnlyWhiteBtn = (props) => {
    return (
        <Link to={props.btnLink} className='my-btn only-white-btn my-5'>
            {props.btnText}
        </Link>
    )
}

export default OnlyWhiteBtn
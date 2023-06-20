import React from 'react'
import SmallText from './SmallText'

const BigText = (props) => {
    return (
        <div className='big-text text-center'>
            <p>{props.big}</p>
            <SmallText normal={props.normal} colored={props.colored} />
        </div>
    )
}

export default BigText
import React from 'react'

const SubscriberSection = () => {
    return (
        <div className='container skills-section d-block py-5'>
            <h2 className='text-center'>Subscribed To Get Weekly Updates</h2>

            
            <div className="subscribe-form mt-5">
                    <input type="text" placeholder='Your Email address...' />
                    <button className='my-btn m-0'> SUBSCRIBE </button>
                </div>
        </div>
    )
}

export default SubscriberSection
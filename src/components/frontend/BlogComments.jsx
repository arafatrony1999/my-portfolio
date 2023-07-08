import React from 'react'
import formal from '../../assets/images/formal.jpg'
import ReplyComment from './ReplyComment'

const BlogComments = () => {
    return (
        <div>
            <h1>3 Responses</h1>

            <div className="comments">
                <div className="single-comment my-3 border-bottom">
                    <div className="d-flex justify-content-between">
                        <div className='d-flex'>
                            <img className='rounded-circle' width={40} height={40} src={formal} alt="" />
                            <div className='d-flex m-auto'>
                                <h4 className='px-3'>Arafat Rony</h4>
                            </div>
                        </div>
                        <p>October 25, 2022 at 12:17 am</p>
                    </div>
                    <p className='py-3'>suits their needs. You can learn more about it here: Web Hosting What is web hosting? How to host a website? How much does it cost to host a website? How to choose a web hosting provider? We hope that these guides are able to give you a more informed idea about web hosting! Have a wonderful day!</p>
                    <ReplyComment />
                </div>
                <div className="single-comment my-3 border-bottom">
                    <div className="d-flex justify-content-between">
                        <div className='d-flex'>
                            <img className='rounded-circle' width={40} height={40} src={formal} alt="" />
                            <div className='d-flex m-auto'>
                                <h4 className='px-3'>Arafat Rony</h4>
                            </div>
                        </div>
                        <p>October 25, 2022 at 12:17 am</p>
                    </div>
                    <p className='py-3'>suits their needs. You can learn more about it here: Web Hosting What is web hosting? How to host a website? How much does it cost to host a website? How to choose a web hosting provider? We hope that these guides are able to give you a more informed idea about web hosting! Have a wonderful day!</p>
                </div>
            </div>
        </div>
    )
}

export default BlogComments
import React, { useState } from 'react'
import formal from '../../assets/images/formal.jpg'
import Form from 'react-bootstrap/Form';
import ReplyComment from './ReplyComment'
import { useBlogContext } from '../../context/BlogContext';
import { BsArrowReturnRight } from "react-icons/bs";
import DateFormat from '../../helper/DateFormat';

const BlogComments = () => {
    const { addComment, singleBlog, setCommentReplyId, commentReplyId } = useBlogContext()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        addComment(singleBlog, name, email, comment)
    }

    return (
        <>
            <h1>{singleBlog.comments.length} Comments</h1>

            <div className="comments">
                {
                    singleBlog.comments.map((comment, index) => {
                        return(
                            <div key={index} className="single-comment my-3 border-bottom py-2">
                                <div className="d-flex justify-content-between">
                                    <div className='d-flex'>
                                        <img className='rounded-circle' width={40} height={40} src={formal} alt="" />
                                        <div className='d-flex m-auto'>
                                            <h4 className='px-3'>{comment.name}</h4>
                                        </div>
                                    </div>
                                    <p>
                                        <DateFormat date={comment.created_at} />
                                    </p>
                                </div>

                                <p className='py-3'>{comment.comment}</p>

                                <button onClick={() => setCommentReplyId(comment.id)} className='btn' style={{marginBottom: '20px'}}>Reply</button>
                                
                                {
                                    commentReplyId === comment.id && <ReplyComment slug={singleBlog.slug} comment={comment} />
                                }
                                <div style={{paddingLeft: '10px'}}>
                                    {
                                        comment.replies.map((reply, index) => {
                                            return(
                                                <div key={index} className='d-flex my-3'>
                                                    <div className='position-relative top-50' style={{fontSize: '20px'}}>
                                                        <BsArrowReturnRight />
                                                    </div>
                                                    <div key={index} className="single-comment" style={{paddingLeft: '20px'}}>
                                                        <div className="d-flex justify-content-between">
                                                            <div className='d-flex'>
                                                                <img className='rounded-circle' width={40} height={40} src={formal} alt="" />
                                                                <div className='d-flex m-auto'>
                                                                    <h4 className='px-3'>{reply.name}</h4>
                                                                </div>
                                                            </div>
                                                            <p>
                                                                <DateFormat date={reply.created_at} />
                                                            </p>
                                                        </div>
                                                        <p className='py-3'>{reply.replies}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            
            <div className='reply-comment py-3'>
                <h2>Leave a comment : </h2>

                <p>Your email address will not be published. Required fields are marked *</p>

                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Comment *</Form.Label>
                        <Form.Control onChange={(e) => setComment(e.target.value)} as="textarea" rows={3} placeholder='Write your comment here...' />
                    </Form.Group>

                    <button type='submit' className='py-1 px-2 colored-btn'>Post Comment</button>
                </Form>
            </div>
        </>
    )
}

export default BlogComments
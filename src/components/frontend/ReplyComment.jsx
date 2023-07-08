import Form from 'react-bootstrap/Form';

const ReplyComment = () => {
    return (
        <div className='reply-comment py-3'>
            <h2>Reply to Arafat Rony's comment</h2>

            <p>Your email address will not be published. Required fields are marked *</p>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Reply *</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Write your reply here...' />
                </Form.Group>

                <button className='py-1 px-2 colored-btn'>Post Comment</button>
            </Form>
        </div>
    )
}

export default ReplyComment
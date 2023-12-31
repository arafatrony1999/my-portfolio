import axios from '../../../helper/Axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify'
import { useTestimonialContext } from '../../../context/TestimonialContext'

const AddTestimonial = () => {
    const [btnText, setBtnText] = useState('Submit')
    const [loading, setLoading] = useState(false)

    const { getTestimonials } = useTestimonialContext()

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [company, setCompany] = useState('')
    const [designation, setDesignation] = useState('')
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [via, setVia] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        setBtnText('Loading...')
        setLoading(true)

        const formData = new FormData()

        formData.append('name', name)
        formData.append('image', image)
        formData.append('company', company)
        formData.append('designation', designation)
        formData.append('title', title)
        formData.append('rating', rating)
        formData.append('via', via)
        formData.append('start', start)
        formData.append('end', end)
        formData.append('description', description)

        axios.post('/addTestimonials', formData)
        .then((res) => {
            if(res.data.status === 1){
                setName('')
                setCompany('')
                setDesignation('')
                setTitle('')
                setRating('')
                setVia('')
                setStart('')
                setEnd('')
                setDescription('')
                
                toast.success('New testimonial added successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })

                getTestimonials()

                setBtnText('Submit')
                setLoading(false)
            }else{
                setBtnText('Submit')
                setLoading(false)
            }
        })
        .catch((error) => {
            setBtnText('Submit')
            setLoading(false)
        })
    }
    return (
        <div className='page-container'>
            <div className="p-3 box-shadow">
                Add Skills
            </div>

            <Form className='my-5' onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Skill Name</Form.Label>
                    <Form.Control value={name} onChange={ (e) => setName(e.target.value)} type="text" placeholder="Enter Client Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select Image</Form.Label>
                    <Form.Control onChange={ (e) => setImage(e.target.files[0]) } type="file" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control value={company} onChange={ (e) => setCompany(e.target.value)} type="text" placeholder="Enter company name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control value={designation} onChange={ (e) => setDesignation(e.target.value)} type="text" placeholder="Enter client designation" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Work Title</Form.Label>
                    <Form.Control value={title} onChange={ (e) => setTitle(e.target.value)} type="text" placeholder="Enter work title" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rating Given</Form.Label>
                    <Form.Control value={rating} onChange={ (e) => setRating(e.target.value)} type="text" placeholder="Enter given rating" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Via</Form.Label>
                    <Form.Control value={via} onChange={ (e) => setVia(e.target.value)} type="text" placeholder="Marketplace name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control value={start} onChange={ (e) => setStart(e.target.value)} type="text" placeholder="Work start date (e.g 08 July, 1999)" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control value={end} onChange={ (e) => setEnd(e.target.value)} type="date" placeholder="Work end date (e.g 06 October, 1999)" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Meta Description</Form.Label>
                    <Form.Control value={description} onChange={ (e) => setDescription(e.target.value) } as="textarea" rows={3} placeholder='Write full review here...' />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading ? true : false}>
                    {btnText}
                </Button>
            </Form>
        </div>
    )
}

export default AddTestimonial
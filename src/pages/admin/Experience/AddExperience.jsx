import axios from '../../../helper/Axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify'
import { useExperienceContext } from '../../../context/ExperienceContext';

const AddExperience = () => {
    const { getExperience } = useExperienceContext()
    
    const [company, setCompany] = useState('')
    const [image, setImage] = useState('')
    const [designation, setDesignation] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [experience, setExperience] = useState('')
    const [site, setSite] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('company', company)
        formData.append('image', image)
        formData.append('designation', designation)
        formData.append('start', start)
        formData.append('end', end)
        formData.append('experience', experience)
        formData.append('site', site)
        formData.append('type', type)
        formData.append('description', description)

        axios.post('/addExperience', formData)
        .then((res) => {
            if(res.data.status === 1){
                setCompany('')
                setImage('')
                setDesignation('')
                setStart('')
                setEnd('')
                setExperience('')
                setSite('')
                setType('')
                setDescription('')
                
                toast.success('Experience added successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                getExperience()
            }else{

            }
        })
        .catch((error) => {

        })
    }

    return (
        <div className='page-container'>
            <div className="p-3 box-shadow">
                Add Experience
            </div>

            <Form className='my-5' onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Company Name</Form.Label>
                    <Form.Control value={company} onChange={ (e) => setCompany(e.target.value) } type="text" placeholder="Enter Company Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select Company Image</Form.Label>
                    <Form.Control onChange={ (e) => setImage(e.target.files[0]) } type="file" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Designation</Form.Label>
                    <Form.Control value={designation} onChange={ (e) => setDesignation(e.target.value) } type="text" placeholder="Enter Designation" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Start Date</Form.Label>
                    <Form.Control value={start} onChange={ (e) => setStart(e.target.value) } type="date" placeholder="Enter Start Date" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter End Date</Form.Label>
                    <Form.Control value={end} onChange={ (e) => setEnd(e.target.value) } type="date" placeholder="Enter End Date" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Experience (Year)</Form.Label>
                    <Form.Control value={experience} onChange={ (e) => setExperience(e.target.value) } type="text" placeholder="Enter Experience Year" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Company Website</Form.Label>
                    <Form.Control value={site} onChange={ (e) => setSite(e.target.value) } type="text" placeholder="Enter Company Website" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select type</Form.Label>
                    <Form.Select defaultValue={type} onChange={ (e) => setType(e.target.value)} aria-label="Default select example">
                        <option>Select Experience Type</option>
                        <option value="education">Education</option>
                        <option value="job">Job</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={description} onChange={ (e) => setDescription(e.target.value)} as="textarea" rows={3} placeholder='Enter Project Description...' />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddExperience
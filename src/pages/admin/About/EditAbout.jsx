import axios from '../../../helper/Axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAboutContext } from '../../../context/AboutContext';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditAbout = () => {
    const [id, setId] = useSearchParams()

    const { getAbout } = useAboutContext();

    const [title, setTitle] = useState('')
    const [number, setNumber] = useState('')

    
    useEffect(() => {
        setId(id)

        axios.get(`/getEditAbout?id=${id.get('id')}`)
        .then((res) => {
            setTitle(res.data.title)
            setNumber(res.data.number)
        })
        .catch((error) => {

        })
    }, [id, setId])

    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('id', id.get('id'))
        formData.append('title', title)
        formData.append('number', number)

        axios.post('/editAbout', formData)
        .then((res) => {
            if(res.data.status === 1){
                toast.success('About updated successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                getAbout()
            }
        })
        .catch((error) => {

        })
    }
    

    return (
        <div className='page-container'>
            <div className="p-3 box-shadow">
                Edit About
            </div>

            <Form className='my-5' onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter About Title Name</Form.Label>
                    <Form.Control defaultValue={title} onChange={ (e) => setTitle(e.target.value) } type="text" placeholder="Enter About Title" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter About Number</Form.Label>
                    <Form.Control defaultValue={number} onChange={ (e) => setNumber(e.target.value) } type="text" placeholder="Enter About Number" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default EditAbout
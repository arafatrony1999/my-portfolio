import axios from '../../../helper/Axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCategoryContext } from '../../../context/CategoryContext';
import { toast } from 'react-toastify'

const AddCategories = () => {
    const { getCategories } = useCategoryContext();

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [type, setType] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('name', name)
        formData.append('image', image)
        formData.append('type', type)

        axios.post('/addCategories', formData)
        .then((res) => {
            if(res.data.status === 1){
                setName('')
                setImage('')
                
                toast.success('Category added successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                getCategories()
            }else{

            }
        })
        .catch((error) => {

        })
    }
    return (
        <div className='page-container'>
            <div className="p-3 box-shadow">
                Add Categories
            </div>

            <Form className='my-5' onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Category Name</Form.Label>
                    <Form.Control onChange={ (e) => setName(e.target.value)} type="text" placeholder="Enter Category Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select Category Display Image</Form.Label>
                    <Form.Control onChange={ (e) => setImage(e.target.files[0])} type="file" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select Category type</Form.Label>
                    <Form.Select defaultValue={type} onChange={ (e) => setType(e.target.value)} aria-label="Default select example">
                        <option>Select Category Type</option>
                        <option value="website">Website</option>
                        <option value="blog">Blog</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddCategories
import axios from '../../../helper/Axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSearchParams } from 'react-router-dom';
import { useCategoryContext } from '../../../context/CategoryContext';
import { toast } from 'react-toastify'

const EditCategories = () => {
    const [id, setId] = useSearchParams()
    const { getCategories } = useCategoryContext();

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {
        setId(id)

        axios.get(`/getEditCategory?id=${id.get('id')}`)
        .then((res) => {
            setName(res.data.name)
            setImage(res.data.image)
            setType(res.data.type)
        })
        .catch((error) => {

        })
    }, [id, setId])

    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('id', id.get('id'))
        formData.append('name', name)
        formData.append('image', image)
        formData.append('type', type)

        axios.post('/editCategories', formData)
        .then((res) => {
            if(res.data.status === 1){
                toast.success('Category updated successfully!', {
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
                Edit Portfolio
            </div>

            <Form className='my-5' onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Project Name</Form.Label>
                    <Form.Control defaultValue={name} onChange={ (e) => setName(e.target.value)} type="text" placeholder="Enter Category Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select Project Display Image</Form.Label>
                    <Form.Control onChange={ (e) => setImage(e.target.files[0])} type="file" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select Category type</Form.Label>
                    <Form.Select value={type} onChange={ (e) => setType(e.target.value)} aria-label="Default select example">
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

export default EditCategories
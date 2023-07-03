import axios from '../../../helper/Axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { usePortfolioContext } from '../../../context/PortfolioContext';
import { useSearchParams } from 'react-router-dom';
import Select from 'react-select'
import { useCategoryContext } from '../../../context/CategoryContext';
import { toast } from 'react-toastify';

const EditPortfolios = () => {
    const [id, setId] = useSearchParams()

    const { getPortfolios } = usePortfolioContext();
    const { categories } = useCategoryContext();

    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    const setSelectedCategory = (item) => {
        setCategory(item)
    }

    useEffect(() => {
        setId(id)

        axios.get(`/getEditPortfolio?id=${id.get('id')}`)
        .then((res) => {
            setName(res.data.name)
            setLink(res.data.link)
            setCategory(res.data.categories)
            setImage(res.data.image)
            setDescription(res.data.description)
        })
        .catch((error) => {

        })
    }, [id, setId])

    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('id', id.get('id'))
        formData.append('name', name)
        formData.append('link', link)
        formData.append('category', JSON.stringify(category))
        formData.append('image', image)
        formData.append('description', description)

        axios.post('/editPortfolios', formData)
        .then((res) => {
            if(res.data.status === 1){
                toast.success('Project updated successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                getPortfolios()
            }else if(res.data.exist === 1){
                toast.warn('Same project already exist!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
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
                    <Form.Control defaultValue={name} onChange={ (e) => setName(e.target.value)} type="text" placeholder="Enter Project Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Project Link</Form.Label>
                    <Form.Control defaultValue={link} onChange={ (e) => setLink(e.target.value)} type="text" placeholder="Enter Project Link" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Project Category</Form.Label>
                    <Select
                        value={category}
                        onChange={setSelectedCategory}
                        options={categories}
                        getOptionLabel={(options) => options.name}
                        getOptionValue={(options) => options.id}
                        isSearchable
                        isClearable
                        noOptionsMessage={() => 'No category found'}
                        placeholder='Select Categories...'
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select Project Display Image</Form.Label>
                    <Form.Control onChange={ (e) => setImage(e.target.files[0])} type="file" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control defaultValue={description} onChange={ (e) => setDescription(e.target.value)} as="textarea" rows={3} placeholder='Enter Project Description...' />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default EditPortfolios
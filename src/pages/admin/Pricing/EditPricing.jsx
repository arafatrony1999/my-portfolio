import axios from '../../../helper/Axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { usePricingContext } from '../../../context/PricingContext';

const EditPricing = () => {
    const [id, setId] = useSearchParams()
    
    const { getPricing } = usePricingContext()

    const [icon, setIcon] = useState('')
    const [title, setTitle] = useState('')
    const [mainPrice, setMainPrice] = useState([])
    const [offPrice, setOffPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        setId(id)

        axios.get(`/getEditPricing?id=${id.get('id')}`)
        .then((res) => {
            setTitle(res.data.title)
            setMainPrice(res.data.main_price)
            setOffPrice(res.data.off_price)
            setDescription(res.data.description)
        })
        .catch((error) => {

        })
    }, [id, setId])

    
    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('id', id.get('id'))
        formData.append('icon', icon)
        formData.append('title', title)
        formData.append('mainPrice', mainPrice)
        formData.append('offPrice', offPrice)
        formData.append('description', description)

        axios.post('/editPricing', formData)
        .then((res) => {
            console.log(res.data)
            if(res.data.status === 1){
                setIcon('')
                setTitle('')
                setMainPrice([])
                setOffPrice('')
                setDescription('')

                
                toast.success('Pricing updated successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                getPricing()
            }else{

            }
        })
        .catch((error) => {

        })
    }
    
    const editorConfiguration = {
        toolbar: {
            items: [
                'undo',
                'redo',
                'heading',
                '|',
                'bold',
                'italic',
                'fontColor',
                'fontFamily',
                'fontSize',
                'blockQuote',
                'link',
                'BulletedList',
                'NumberedList',
                '|',
                'outdent',
                'indent',
                '|',
                'mediaEmbed',
                '|',
                'code',
                'codeBlock',
                '|',
                'RemoveFormat',
                'Subscript',
                'Superscript',
                'InsertTable',
                'findAndReplace',
            ]
        },
    };


    return (
        <div className='page-container'>
            <div className="p-3 box-shadow">
                Add Pricing
            </div>

            <Form className='my-5' onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Pricing Title</Form.Label>
                    <Form.Control defaultValue={title} onChange={ (e) => setTitle(e.target.value) } type="text" placeholder="Enter Pricing Title" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select Pricing Icon</Form.Label>
                    <Form.Control onChange={ (e) => setIcon(e.target.files[0]) } type="file" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Main Price</Form.Label>
                    <Form.Control defaultValue={mainPrice} onChange={ (e) => setMainPrice(e.target.value) } type="text" placeholder="Enter Main Price" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Off Price</Form.Label>
                    <Form.Control defaultValue={offPrice} onChange={ (e) => setOffPrice(e.target.value) } type="text" placeholder="Enter Off Price" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <CKEditor
                        editor={ Editor }
                        config={ editorConfiguration }
                        data={description}
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setDescription(data)
                        }}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default EditPricing
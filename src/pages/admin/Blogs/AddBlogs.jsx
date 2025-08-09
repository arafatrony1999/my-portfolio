import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useCategoryContext } from '../../../context/CategoryContext';
import Select from 'react-select'
import axios from '../../../helper/Axios'
import { toast } from 'react-toastify';
import { useBlogContext } from '../../../context/BlogContext';


const AddBlogs = () => {
    const [btnText, setBtnText] = useState('Submit')
    const [loading, setLoading] = useState(false)

    const { categories } = useCategoryContext()
    const { getBlogs } = useBlogContext()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [metaDescription, setMetaDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        setBtnText('Loading...')
        setLoading(true)

        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', image)
        formData.append('category', category.id)
        formData.append('metaDescription', metaDescription)

        axios.post('/addBlogs', formData)
        .then((res) => {
            console.log(res.data)
            if(res.data.status === 1){
                setTitle('')
                setCategory('')
                setImage('')
                setDescription('')
                setMetaDescription('')
                
                toast.success('Blog added successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                getBlogs()

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

    const setSelectedCategory = (item) => {
        setCategory(item)
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
                Add Blogs
            </div>

            <Form className='my-5' onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Blog Title</Form.Label>
                    <Form.Control value={title} onChange={ (e) => setTitle(e.target.value)} type="text" placeholder="Enter Blog Title..." />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Project Category</Form.Label>
                    <Select
                        value={category}
                        onChange={setSelectedCategory}
                        // options={categories}
                        options={categories.filter((category) => {return category.type === 'blog'})}
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
                    <Form.Label>Select Blog Image</Form.Label>
                    <Form.Control onChange={ (e) => setImage(e.target.files[0]) } type="file" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Write your blog here</Form.Label>
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
                <Form.Group className="mb-3">
                    <Form.Label>Meta Description</Form.Label>
                    <Form.Control value={metaDescription} onChange={ (e) => setMetaDescription(e.target.value) } as="textarea" rows={3} placeholder='Write meta description here...' />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading ? true : false}>
                    {btnText}
                </Button>
            </Form>
        </div>
    )
}

export default AddBlogs
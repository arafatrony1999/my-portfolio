import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import DeleteModal from './DeleteModal'
import { toast } from 'react-toastify'
import { useBlogContext } from '../../../context/BlogContext'
import { FaEdit, FaTrash } from "react-icons/fa";

const Blogs = () => {
    const { loading, filteredBlogs, getBlogs, setFilteredBlogs } = useBlogContext();

    const [deleteModalShow, setDeleteModalShow] = useState(false);

    const [sendDeleteId, setSendDeleteId] = useState('')
    const [search, setSearch] = useState('')
    
    const deleteModal = (deleteID) => {
        setSendDeleteId(deleteID)
        setDeleteModalShow(true)
    }
    
    const onDeleteSuccess = () => {
        getBlogs()
        setDeleteModalShow(false)

        toast.success('Skill deleted successfully!', {
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

    useEffect(() => {
        setFilteredBlogs(search)
        //eslint-disable-next-line
    }, [search])
    
    const columns = [
        {
            name: 'Image',
            selector: row => <img style={{height: '70px'}} src={row.image} alt='' />,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Category',
            selector: row => row.categories.name,
            sortable: true
        },
        {
            name: 'Slug',
            selector: row => row.slug,
        },
        {
            name: 'Meta Description',
            selector: row => row.meta_description,
        },
        {
            name: 'Action',
            cell: row => <>
                <Link to={'edit?id='+row.id} className='btn btn-primary'>
                    <FaEdit />
                </Link>
                <button onClick={() => deleteModal(row.id)} className='btn btn-danger mx-2'>
                    <FaTrash />
                </button>
            </>
        }
    ]


    return (
        <>
            <div className='page-container'>
                <DataTable
                    columns={columns}
                    data={filteredBlogs}
                    pagination
                    progressPending={loading && 'Loading...'}
                    title='Blogs'
                    fixedHeader
                    fixedHeaderScrollHeight='75%'
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover
                    subHeader
                    subHeaderComponent={
                        <input type='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='w-25 form-group' />
                    }
                    actions={
                        <Link to='add' className='btn btn-primary'>ADD NEW BLOG</Link>
                    }
                />
            </div>

            
            <DeleteModal 
                show={deleteModalShow}
                onHide={() => setDeleteModalShow(false)}
                deleteID = {sendDeleteId}
                onDeleteSuccess = {onDeleteSuccess}
            />
        </>
    )
}

export default Blogs
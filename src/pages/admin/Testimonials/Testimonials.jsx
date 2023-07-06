import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import DeleteModal from './DeleteModal'
import { toast } from 'react-toastify'
import { useTestimonialContext } from '../../../context/TestimonialContext'
import { FaEdit, FaTrash } from "react-icons/fa";

const Testimonials = () => {
    const { loading, filteredTestimonials, getTestimonials, setFilteredTestimonials } = useTestimonialContext();

    const [deleteModalShow, setDeleteModalShow] = useState(false);

    const [sendDeleteId, setSendDeleteId] = useState('')
    const [search, setSearch] = useState('')

    const deleteModal = (deleteID) => {
        setSendDeleteId(deleteID)
        setDeleteModalShow(true)
    }

    const onDeleteSuccess = () => {
        getTestimonials()
        setDeleteModalShow(false)

        toast.success('Testimonial deleted successfully!', {
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
        setFilteredTestimonials(search)
        //eslint-disable-next-line
    }, [search])

    const columns = [
        {
            name: 'Image',
            selector: row => <img style={{height: '70px'}} src={row.image} alt="" />,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Rating',
            selector: row => row.rating,
        },
        {
            name: 'Company',
            selector: row => row.company,
        },
        {
            name: 'Designation',
            selector: row => row.designation,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Start',
            selector: row => row.start,
        },
        {
            name: 'End',
            selector: row => row.end,
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
                    data={filteredTestimonials}
                    pagination
                    progressPending={loading && 'Loading...'}
                    title='Testimonials'
                    fixedHeader
                    fixedHeaderScrollHeight='50%'
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover
                    subHeader
                    subHeaderComponent={
                        <input type='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='w-25 form-group' />
                    }
                    actions={
                        <Link to='add' className='btn btn-primary'>ADD NEW Testimonial</Link>
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

export default Testimonials
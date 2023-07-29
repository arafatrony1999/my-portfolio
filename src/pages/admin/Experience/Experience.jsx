import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import { useExperienceContext } from '../../../context/ExperienceContext'
import DeleteModal from './DeleteModal'
import { FaEdit, FaTrash } from "react-icons/fa";
import DateFormat from '../../../helper/DateFormat'

const Experience = () => {
    const { loading, filteredExperience, getExperience, setFilteredExperience } = useExperienceContext();

    const [deleteModalShow, setDeleteModalShow] = useState(false);

    const [sendDeleteId, setSendDeleteId] = useState('')
    const [search, setSearch] = useState('')
    
    const deleteModal = (deleteID) => {
        setSendDeleteId(deleteID)
        setDeleteModalShow(true)
    }
    
    const onDeleteSuccess = () => {
        getExperience()
        setDeleteModalShow(false)
    }

    useEffect(() => {
        setFilteredExperience(search)
        //eslint-disable-next-line
    }, [search])
    
    const columns = [
        {
            name: 'Image',
            selector: row => <img style={{height: '50px'}} src={row.image} alt="" />
        },
        {
            name: 'Company',
            selector: row => row.company,
            sortable: true
        },
        {
            name: 'Website',
            selector: row => <a href={row.site} target="_blank" rel="noopener noreferrer">{row.site}</a>,
        },
        {
            name: 'Designation',
            selector: row => row.designation,
            sortable: true
        },
        {
            name: 'Start Date',
            selector: row => <DateFormat date={row.start} />,
            sortable: true,
        },
        {
            name: 'End Date',
            selector: row => <DateFormat date={row.end} />,
            sortable: true,
        },
        {
            name: 'Experience',
            selector: row => <span>{row.experience} Years</span>,
            sortable: true,
        },
        {
            name: 'Type',
            selector: row => row.type,
            sortable: true,
        },
        {
            name: 'Description',
            selector: row => <div dangerouslySetInnerHTML={{__html: row.description}} />
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
                    data={filteredExperience}
                    pagination
                    progressPending={loading && 'Loading...'}
                    title='Experience'
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
                        <Link to='add' className='btn btn-primary'>ADD NEW EXPERIENCE</Link>
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

export default Experience
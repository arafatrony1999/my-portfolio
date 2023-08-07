import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import DeleteModal from './DeleteModal'
import { toast } from 'react-toastify'
import { FaTrash } from "react-icons/fa";
import { useContactContext } from '../../../context/ContactContext'

const Contacts = () => {
    const { loading, filteredContacts, getContacts, setFilteredContacts, setSeenStatus } = useContactContext()

    const [deleteModalShow, setDeleteModalShow] = useState(false);

    const [sendDeleteId, setSendDeleteId] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        setSeenStatus()
        //eslint-disable-next-line
    }, [])
    
    const deleteModal = (deleteID) => {
        setSendDeleteId(deleteID)
        setDeleteModalShow(true)
    }
    
    const onDeleteSuccess = () => {
        getContacts()
        setDeleteModalShow(false)

        toast.success('Contact deleted successfully!', {
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
        setFilteredContacts(search)
        //eslint-disable-next-line
    }, [search])
    
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
        },
        {
            name: 'Message',
            selector: row => row.message,
        },
        {
            name: 'Action',
            cell: row => <>
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
                    data={filteredContacts}
                    pagination
                    progressPending={loading && 'Loading...'}
                    title='Contacts'
                    fixedHeader
                    fixedHeaderScrollHeight='75%'
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover
                    subHeader
                    subHeaderComponent={
                        <input type='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='w-25 form-group' />
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

export default Contacts
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import DeleteModal from './DeleteModal'
import { toast } from 'react-toastify'
import { FaTrash } from "react-icons/fa";
import { useSubscriberContext } from '../../../context/SubscriberContext'

const Subscribers = () => {
    const { loading, filteredSubscribers, getSubscribers, setFilteredSubscribers, setSeenStatus } = useSubscriberContext()

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
        getSubscribers()
        setDeleteModalShow(false)

        toast.success('Subscriber deleted successfully!', {
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
        setFilteredSubscribers(search)
        //eslint-disable-next-line
    }, [search])
    
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
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
                    data={filteredSubscribers}
                    pagination
                    progressPending={loading && 'Loading...'}
                    title='Subscribers'
                    fixedHeader
                    fixedHeaderScrollHeight='50%'
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

export default Subscribers
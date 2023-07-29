import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import { usePricingContext } from '../../../context/PricingContext'
import DeleteModal from './DeleteModal'
import { FaEdit, FaTrash } from "react-icons/fa";

const Pricing = () => {
    const { loading, filteredPricing, getPricing, setFilteredPricing } = usePricingContext();

    const [deleteModalShow, setDeleteModalShow] = useState(false);

    const [sendDeleteId, setSendDeleteId] = useState('')
    const [search, setSearch] = useState('')
    
    const deleteModal = (deleteID) => {
        setSendDeleteId(deleteID)
        setDeleteModalShow(true)
    }
    
    const onDeleteSuccess = () => {
        getPricing()
        setDeleteModalShow(false)
    }

    useEffect(() => {
        setFilteredPricing(search)
        //eslint-disable-next-line
    }, [search])
    
    const columns = [
        {
            name: 'Icon',
            selector: row => <img style={{width: '50px'}} src={row.icon} alt="" />
        },
        {
            name: 'Title',
            selector: row => <p>For {row.title}</p>,
            sortable: true
        },
        {
            name: 'Main Price',
            selector: row => row.main_price,
            sortable: true
        },
        {
            name: 'Off Price',
            selector: row => row.off_price,
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
                    data={filteredPricing}
                    pagination
                    progressPending={loading && 'Loading...'}
                    title='Pricing'
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
                        <Link to='add' className='btn btn-primary'>ADD NEW PRICING</Link>
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

export default Pricing
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import { usePortfolioContext } from '../../../context/PortfolioContext'
import DeleteModal from './DeleteModal'

const Portfolios = () => {
    const { loading, filteredPortfolios, getPortfolios } = usePortfolioContext();

    const [deleteModalShow, setDeleteModalShow] = useState(false);

    const [sendDeleteId, setSendDeleteId] = useState('')
    const [search, setSearch] = useState('')
    
    const deleteModal = (deleteID) => {
        setSendDeleteId(deleteID)
        setDeleteModalShow(true)
    }
    
    const onDeleteSuccess = () => {
        getPortfolios()
        setDeleteModalShow(false)
    }
    
    const columns = [
        {
            name: 'Image',
            selector: row => <img style={{width: '50px'}} src={row.image} alt="" />
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Link',
            selector: row => <a href={row.link} target='_blank' rel='noreferrer'>{row.link}</a>,
            sortable: true
        },
        {
            name: 'Description',
            selector: row => <div dangerouslySetInnerHTML={{__html: row.description}} />
        },
        {
            name: 'Action',
            cell: row => <>
                <Link to={`edit/${row.id}`} className='btn btn-primary'>Edit</Link>
                <button onClick={() => deleteModal(row.id)} className='btn btn-danger mx-2'>Delete</button>
            </>
        }
    ]


    return (
        <>
            <div className='page-container'>
                <DataTable
                    columns={columns}
                    data={filteredPortfolios}
                    pagination
                    progressPending={loading && 'Loading...'}
                    title='Portfolios'
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
                        <Link to='add' className='btn btn-primary'>ADD NEW LINK</Link>
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

export default Portfolios
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import DeleteModal from './DeleteModal'
import { toast } from 'react-toastify'
import { useSkillContext } from '../../../context/SkillContext'

const Skills = () => {
    const { loading, filteredSkills, getSkills, setFilteredSkills } = useSkillContext();

    const [deleteModalShow, setDeleteModalShow] = useState(false);

    const [sendDeleteId, setSendDeleteId] = useState('')
    const [search, setSearch] = useState('')
    
    const deleteModal = (deleteID) => {
        setSendDeleteId(deleteID)
        setDeleteModalShow(true)
    }
    
    const onDeleteSuccess = () => {
        getSkills()
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
        setFilteredSkills(search)
        //eslint-disable-next-line
    }, [search])
    
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Skill Percent',
            selector: row => row.percent,
            sortable: true
        },
        {
            name: 'Action',
            cell: row => <>
                <Link to={'edit?id='+row.id} className='btn btn-primary'>Edit</Link>
                <button onClick={() => deleteModal(row.id)} className='btn btn-danger mx-2'>Delete</button>
            </>
        }
    ]


    return (
        <>
            <div className='page-container'>
                <DataTable
                    columns={columns}
                    data={filteredSkills}
                    pagination
                    progressPending={loading && 'Loading...'}
                    title='Skills'
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
                        <Link to='add' className='btn btn-primary'>ADD NEW SKILL</Link>
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

export default Skills
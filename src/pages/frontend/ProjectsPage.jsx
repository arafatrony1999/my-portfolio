import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePortfolioContext } from '../../context/PortfolioContext'

const ProjectsPage = () => {
    const [id, setId] = useSearchParams()

    const { setSinglePortfolio } = usePortfolioContext()

    useEffect(() => {
        setId(id)
        setSinglePortfolio(id.get('id'))
    }, [id, setId, setSinglePortfolio])

    return (
        <div>ProjectsPage</div>
    )
}

export default ProjectsPage
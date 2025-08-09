import CustomMetaTags from '../../layouts/frontend/CustomMetaTags'
import BlogsPage from './BlogsPage'
import ProjectsPage from './ProjectsPage'

const CategoriesPage = () => {

    return (
        <>
            <CustomMetaTags title="Categories | Arafat Rony" />
            <BlogsPage />
            <ProjectsPage />
        </>
    )
}

export default CategoriesPage
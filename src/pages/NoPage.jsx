import { Link } from 'react-router-dom'
import './nopage.css'
import CustomMetaTags from '../layouts/frontend/CustomMetaTags'

const NoPage = () => {
    return (
        <div class="no-page-container">
            <CustomMetaTags title="404 Error" />
            <div class="gif">
                <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
            </div>
            <div class="no-page-content">
                <h1 class="main-heading">This page is gone.</h1>

                <p>
                    ...maybe the page you're looking for is not found or never existed.
                </p>
                
                <Link to="/">
                    <button>Back to home <i class="far fa-hand-point-right"></i></button>
                </Link>
            </div>
        </div>
    )
}

export default NoPage
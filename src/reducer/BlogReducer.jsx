const BlogReducer = (state, action) => {
    if(action.type === 'SET_INITIAL_STATUS'){
        return{
            ...state,
            loading: true,
            blogs: [],
            filteredBlogs: [],
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            blogs: action.payload,
            filteredBlogs: action.payload,
        }
    }

    if(action.type === 'SET_FILTERED_BLOGS'){
        const { search, blogs } = action.payload;
        
        let result = blogs.filter(single_data => {
            return single_data.name.toLowerCase().match(search.toLowerCase())
        });

        return{
            ...state,
            loading: false,
            filteredBlogs: result,
        }
    }

    if(action.type === 'SET_SINGLE_BLOG'){
        return{
            ...state,
            singleBlog: action.payload[0]
        }
    }

    if(action.type === 'SET_COMMENT_REPLY_ID'){
        return{
            ...state,
            commentReplyId: action.payload,
        }
    }

    if(action.type === 'UNSET_COMMENT_REPLY_ID'){
        return{
            ...state,
            commentReplyId: '',
        }
    }

    return state;
}

export default BlogReducer
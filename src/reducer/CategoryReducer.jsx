const CategoryReducer = (state, action) => {
    if(action.type === 'SET_INITIAL_STATUS'){
        return{
            ...state,
            loading: true,
            categories: [],
            filteredCategories: [],
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            categories: action.payload,
            filteredCategories: action.payload,
        }
    }

    if(action.type === 'SET_FILTERED_CATEGORIES'){
        const { search, categories } = action.payload;
        
        let result = categories.filter(single_data => {
            return single_data.name.toLowerCase().match(search.toLowerCase())
        });

        return{
            ...state,
            loading: false,
            filteredCategories: result,
        }
    }

    return state;
}

export default CategoryReducer
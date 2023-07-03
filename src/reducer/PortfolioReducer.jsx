const PortFolioReducer = (state, action) => {
    if(action.type === 'SET_INITIAL_STATUS'){
        return{
            ...state,
            loading: true,
            portfolios: [],
            filteredPortfolios: [],
        }
    }

    if(action.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            portfolios: action.payload,
            filteredPortfolios: action.payload,
        }
    }

    if(action.type === 'SET_FILTERED_PORTFOLIOS'){
        const { search, portfolios } = action.payload;
        
        let result = portfolios.filter(single_data => {
            return single_data.name.toLowerCase().match(search.toLowerCase())
        });

        return{
            ...state,
            loading: false,
            filteredPortfolios: result
        }
    }

    return state;
}

export default PortFolioReducer
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

    return state;
}

export default PortFolioReducer
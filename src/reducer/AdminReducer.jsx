const AdminReducer = (state, action) => {
    if(state.type === 'INITIAL_STATE'){
        return{
            ...state,
            loading: true,
            authentication: false,
            user: []
        }
    }

    if(state.type === 'API_DATA'){
        return{
            ...state,
            loading: false,
            user: action.payload,
            authentication: true
        }
    }

    if(state.type === 'NO_USER_FOUND'){
        return{
            ...state,
            loading: false,
            user: [],
            authentication: false
        }
    }

    return state
}

export default AdminReducer
const initState = {
    error: null,
    isLoading: false
}

const globalReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            return {
                ...state,
                isLoading: action.loading,
                error: action.err.message
            }

        case 'ADD_SUCCESS':
            return {
                ...state,
                isLoading: action.loading,
                error: null
            }

        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.loading
            }

        default:
            return state
            
    }
};

export default globalReducer;
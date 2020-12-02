const initState = {
    error: null,
    isLoading: false
}

const productReducer = (state = initState, action) => {
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

        case 'PRODUCT_LOADING':
            return {
                ...state,
                isLoading: action.loading
            }

        default:
            return state
            
    }
};

export default productReducer;
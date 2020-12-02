const initState = {
    status:[
        'terima',
        'proses',
        'batal',
        'ambil',
    ],
    error: null,
    isLoading: false
}

const jasaReducer = (state = initState, action) => {
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

        case 'SERVICE_LOADING':
            return {
                ...state,
                isLoading: action.loading
            }

        default:
            return state
            
    }
};

export default jasaReducer;
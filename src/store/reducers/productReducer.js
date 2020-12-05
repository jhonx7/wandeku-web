const initState = {
    product: []
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return {
                ...state,
                isLoading: action.loading,
                product: action.product
            }
        default:
            return state
            
    }
};

export default productReducer;
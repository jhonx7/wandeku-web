const initState = {
    status:[
        'terima',
        'proses',
        'batal',
        'ambil',
    ],
    sevice: [],
}

const serviceReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_SERVICE':
            return {
                ...state,
                service: action.sevice
            }

        default:
            return state
            
    }
};

export default serviceReducer;
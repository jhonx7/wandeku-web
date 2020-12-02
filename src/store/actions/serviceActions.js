export const addService = (jasa) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
      }) => {
        const firestore = getFirestore();

        dispatch({
            type: 'SERVICE_LOADING',
            loading: true
        })

        firestore.collection('jasa').add({
            jasa: jasa.jasa,
            kategori: jasa.kategori,
            biaya: jasa.biaya,
            status: jasa.status,
            deskripsi: jasa.deskripsi,
        })
        .then(() => {
            dispatch({
                type: 'ADD_SUCCESS',
                loading: false,
            });
        }).catch((err) => {
            dispatch({
                type: 'ADD_ERROR',
                loading: false,
                err
            });
        });
    }
}
export const addCustomer = (pelanggan) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
      }) => {
        const firestore = getFirestore();
        const toko = getState().firebase.profile.toko;

        dispatch({
            type: 'SET_LOADING',
            loading: true
        })

        firestore.collection('pelanggan').add({
            nama: pelanggan.namaPelanggan,
            noHp: pelanggan.noHp,
            alamat: pelanggan.alamat,
            toko
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
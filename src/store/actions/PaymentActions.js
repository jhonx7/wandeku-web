export const addPayment = (pembiayaan) => {
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

        firestore.collection('pembiayaan').add({
            nama: pembiayaan.nama,
            nominal: pembiayaan.nominal,
            catatan: pembiayaan.catatan,
            status: pembiayaan.status,
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

export const editPayment = (pembiayaan) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
      }) => {
        const firestore = getFirestore();

        dispatch({
            type: 'SET_LOADING',
            loading: true
        })

        firestore.collection('pembiayaan').doc(pembiayaan.id).set({
            nama: pembiayaan.nama,
            nominal: pembiayaan.nominal,
            catatan: pembiayaan.catatan,
            status: pembiayaan.status,
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

export const deletePayment = (id) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
      }) => {
        const firestore = getFirestore();

        dispatch({
            type: 'SET_LOADING',
            loading: true
        })

        firestore.collection('pembiayaan').doc(id).delete()
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
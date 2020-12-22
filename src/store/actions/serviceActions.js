export const addService = (jasa) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
      }) => {
        const firestore = getFirestore();

        dispatch({
            type: 'SET_LOADING',
            loading: true
        })

        firestore.collection('jasa').add({
            jasa: jasa.jasa,
            pelanggan: jasa.pelanggan,
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

export const editService = (jasa) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
      }) => {
        const firestore = getFirestore();

        dispatch({
            type: 'SET_LOADING',
            loading: true
        })

        firestore.collection('jasa').doc(jasa.id).set({
            jasa: jasa.jasa,
            pelanggan: jasa.pelanggan,
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
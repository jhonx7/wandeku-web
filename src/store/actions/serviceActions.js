export const addService = (jasa) => {
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

        firestore.collection('jasa').add({
            jasa: jasa.jasa,
            pelanggan: jasa.pelanggan,
            kategori: jasa.kategori,
            biaya: jasa.biaya,
            status: jasa.status,
            deskripsi: jasa.deskripsi,
            pj:'',
            modal: '',
            addons: [],
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
            biaya: jasa.biaya,
            status: jasa.status,
            pj:jasa.pj,
            modal: jasa.modal,
            addons: jasa.addons,
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

export const deleteService = (id) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
      }) => {
        const firestore = getFirestore();

        dispatch({
            type: 'SET_LOADING',
            loading: true
        })

        firestore.collection('jasa').doc(id).delete()
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
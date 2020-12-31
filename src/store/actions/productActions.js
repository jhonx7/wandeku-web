export const addProduct = (produk) => {
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

        firestore.collection('barang').add({
            namaProduk: produk.namaProduk,
            stok: produk.stok,
            kategori: produk.kategori,
            hargaModal: produk.hargaModal,
            hargaJual: produk.hargaJual,
            hargaGrosir: produk.hargaGrosir,
            deskripsi: produk.deskripsi,
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
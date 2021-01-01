import React from 'react';
import MUIDataTable from "mui-datatables";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Avatar, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Loading, Page } from '../../components';
import { convertToRupiah } from '../../utils';
import { deleteProduct } from '../../store';


function Products(props) {
    const { history } = props;
    const dispatch = useDispatch();
    const {toko} = useSelector(state => state.firebase.profile);
    useFirestoreConnect([
        { collection: 'barang', where: [['toko', '==', toko? toko : '']]}
    ])
    const products = useSelector((state) => state.firestore.ordered.barang)

    const columns = [
        {
            name: "id",
            label: "ID",
            options: {
                display: false
            }
        },
        {
            name: "image",
            label: "Gambar",
            options:{
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return <Avatar alt="Produk" variant="rounded" src={value} />
                }
            }
        },
        {
            name: "namaProduk",
            label: "Nama Produk",
        },
        {
            name: "stok",
            label: "Stok",
        },
        {
            name: "kategori",
            label: "Kategori",
        },
        {
            name: "hargaModal",
            label: "Harga Modal",
            options: {
                filter: false,
                display: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return convertToRupiah(value)
                }
            }
        },
        {
            name: "hargaJual",
            label: "Harga Jual",
            options: {
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return convertToRupiah(value)
                }
            }
        },
        {
            name: "hargaGrosir",
            label: "Harga Grosir",
            options: {
                filter: false,
                //display: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return convertToRupiah(value)
                }
            }
        },
        {
            name: "id",
            label: "Action",
            options: {
                filter: false,
                //display: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    
                    return <IconButton aria-label="delete" onClick={()=>dispatch(deleteProduct(value))}><DeleteIcon /></IconButton>
                }
            }
        },
    
    ];
    
    const options = {
        serverSide: true,
        filterType: "dropdown",
        //responsive: "simple",
        //print: false,
        selectableRows: "none",
        // onRowClick: (rowData) => {
        //     let id = rowData[0]
        //     return history.push("/produk/" + id);
        // }
    };

    return (
        <Page title="Produk">
            <Button variant="outlined" color="secondary" onClick={() => history.push("/addProduct")}>Tambah Produk</Button>
            {products ? <MUIDataTable
                title={"List Produk"}
                data={products}
                columns={columns}
                options={options}
            /> : <Loading/> }
        </Page>
    )
}

export default withRouter(Products)

import React from 'react';
import MUIDataTable from "mui-datatables";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Loading, Page } from '../../components';
import { deleteProduct } from '../../store';


function ListEmployees(props) {
    const { history } = props;
    const dispatch = useDispatch();
    const {toko} = useSelector(state => state.firebase.profile);
    useFirestoreConnect([
        { collection: 'users', where: [['toko', '==', toko? toko : '']]}
    ])
    const users = useSelector((state) => state.firestore.ordered.users)

    const columns = [
        {
            name: "id",
            label: "ID",
            options: {
                display: false
            }
        },
        {
            name: "name",
            label: "Nama",
        },
        {
            name: "phoneNumber",
            label: "No. Handphone",
        },
        {
            name: "address",
            label: "Alamat",
        },
        {
            name: "role",
            label: "Jabatan",
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
            <Button variant="outlined" color="secondary" onClick={() => history.push("/addEmployees")}>Tambah Pegawai</Button>
            {users ? <MUIDataTable
                data={users}
                columns={columns}
                options={options}
            /> : <Loading/> }
        </Page>
    )
}

export default withRouter(ListEmployees)


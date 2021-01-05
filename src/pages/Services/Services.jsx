import React from 'react';
import MUIDataTable from "mui-datatables";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect, populate } from 'react-redux-firebase';
import { Loading, Page } from '../../components';
import { Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { convertToRupiah, mapToArray } from '../../utils';
import { deleteService } from '../../store';



const populates = [
    { child: 'pelanggan', root: 'pelanggan' }
]

function Products(props) {
    const { history } = props;
    const dispatch = useDispatch();

    const { toko } = useSelector(state => state.firebase.profile);

    useFirestoreConnect([
        { collection: 'jasa', where: [['toko', '==', toko ? toko : '']], populates },
    ])
    const services = useSelector((state) => populate(state.firestore, 'jasa', populates))
    const dataTables = mapToArray(services)


    const columns = [
        {
            name: "id",
            label: "ID",
            options: {
                display: false
            }
        },
        {
            name: "pelanggan",
            label: "Pelanggan",
            options: {
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return value.nama
                }
            }
        },
        {
            name: "jasa",
            label: "Jasa",
        },
        {
            name: "kategori",
            label: "Kategori",
        },

        {
            name: "biaya",
            label: "Biaya",
            options: {
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return convertToRupiah(value)
                }
            }
        },
        {
            name: "status",
            label: "Status",
        },
        {
            name: "deskripsi",
            label: "Deskripsi",
        },
        {
            name: "id",
            label: "Action",
            options: {
                filter: false,
                //display: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    
                    return <IconButton aria-label="delete" onClick={()=>dispatch(deleteService(value))}><DeleteIcon /></IconButton>
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
        onRowClick: (rowData) => {
            let id = rowData[0]
            return history.push("/jasa/" + id);
        },
    };

    return (
        <Page title="Jasa">
            <Button variant="outlined" color="secondary" onClick={() => history.push("/addService")}>Tambah Jasa</Button>
            {dataTables ? <MUIDataTable
                title={"List Jasa"}
                data={dataTables}
                columns={columns}
                options={options}
            />
                : <Loading />}
        </Page>
    )
}

export default withRouter(Products)

import React from 'react';
import MUIDataTable from "mui-datatables";
import { withRouter } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, populate } from 'react-redux-firebase';
import { Loading, Page } from '../../components';
import { Button } from '@material-ui/core';
import { convertToRupiah } from '../../utils';


const columns = [
    {
        name: "id",
        label: "ID",
        options:{
            display: false
        }
    },
    {
        name: "jasa",
        label: "Jasa",
    },
    // {
    //     name: "pelanggan",
    //     label: "Pelanggan",
    // },
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
];

const populates = [
    { child: 'pelanggan', root: 'pelanggan' }
  ]

function Products(props) {
    const { history } = props;
    useFirestoreConnect([
        { collection: 'jasa' },
        { collection: 'pelanggan' },
    ])
    const services = useSelector((state) => state.firestore.ordered.jasa)
    console.log(services);

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
            {services ? <MUIDataTable
                title={"List Jasa"}
                data={services}
                columns={columns}
                options={options}
            />
            :<Loading/>}
        </Page>
    )
}

export default withRouter(Products)

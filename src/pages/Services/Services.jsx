import React from 'react';
import MUIDataTable from "mui-datatables";
import { withRouter } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Page } from '../../components';
import { Button } from '@material-ui/core';


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
    {
        name: "kategori",
        label: "Kategori",
    },
    {
        name: "keterangan",
        label: "Keterangan",
    },
    {
        name: "biaya",
        label: "Biaya",
    },
    {
        name: "status",
        label: "Status",
    },
    
];


function Products(props) {
    const { history } = props;
    useFirestoreConnect(['jasa'])
    const services = useSelector((state) => state.firestore.ordered.jasa)

    const options = {
        serverSide: true,
        filterType: "dropdown",
        //responsive: "simple",
        //print: false,
        selectableRows: "none",
        onRowClick: (rowData) => {
            let id = rowData[0]
            return history.push("/jasa/" + id);
        }
    };

    return (
        <Page title="Jasa">
            <Button variant="outlined" color="secondary" onClick={() => history.push("/addService")}>Tambah Jasa</Button>
            <MUIDataTable
                title={"List Jasa"}
                data={services}
                columns={columns}
                options={options}
            />
        </Page>
    )
}

export default withRouter(Products)

import React from 'react';
import MUIDataTable from "mui-datatables";
import { withRouter } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Page } from '../../components';
import { Button } from '@material-ui/core';


const columns = ["Name", "Company", "City", "State"];

const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
];


function Products(props) {
    const { history } = props;

    //const columns = ["ID", "Nama", "Username", "Email", "NIK", "NIP", "No HP", "Role"];

    const options = {
        filterType: "dropdown",
        //responsive: "simple",
        //print: false,
        selectableRows: "none",
        onRowClick: rowData => {
            let id = rowData[0]
            return history.push("/profile/" + id);
        }
    };

    return (
        <Page title="Produk">
            <Button variant="outlined" color="secondary" onClick={()=>history.push("/addProduct")}>Tambah Produk</Button>
            <MUIDataTable
                title={"Employee List"}
                data={data}
                columns={columns}
                options={options}
            />
        </Page>
    )
}

export default withRouter(Products)

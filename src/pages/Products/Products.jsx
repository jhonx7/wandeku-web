import React from 'react';
import MUIDataTable from "mui-datatables";
import { withRouter } from "react-router-dom";

import { Page } from '../../components';


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

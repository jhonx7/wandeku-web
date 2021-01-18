import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, MenuItem, Grid, Button, IconButton, Paper, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Page, Loading } from '../../components';
import { withRouter, useParams, Redirect } from 'react-router-dom';
import { editService } from '../../store';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(1),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
}));


function EditService(props) {
    const classes = useStyles();
    let { id } = useParams();
    const dispatch = useDispatch();
    const { toko } = useSelector(state => state.firebase.profile);

    useFirestoreConnect([
        { collection: 'jasa', doc: id },
    ])
    const services = useSelector(({ firestore: { data } }) => data.jasa && data.jasa[id])
    console.log(services);

    const { history } = props;

    const [values, setValues] = React.useState({
        jasa: '',
        pelanggan: '',
        kategori: '',
        status: '',
        biaya: 0,
        deskripsi: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = () => {
        dispatch(editService(values))
        history.push("/jasa")
    }

    if (!services) {
        return <Redirect
            to={{
                pathname: "/notfound",
            }}
        />
    }
    if (toko !== services.toko) {
        return <Redirect
            to={{
                pathname: "/notfound",
            }}
        />
    }

    return (
        <Page title="Detail Jasa">
            
            <Container>
                { services ? 
                    <Paper className={classes.container}>
                        <Typography>{services.jasa}</Typography>
                        <Typography>{services.tanggal}</Typography>
                    </Paper> : <Loading/>}
            </Container>
        </Page>
    );
}

export default withRouter(EditService)
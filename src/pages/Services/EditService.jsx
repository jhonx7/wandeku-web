import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, MenuItem, Grid, Button, IconButton } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Page, Loading, CustomerModal, CategoryModal } from '../../components';
import { withRouter, useParams, Redirect } from 'react-router-dom';
import { editService } from '../../store';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
    withButton: {
        display: 'flex',
        flexDirection: 'row'
    }
}));


function EditService(props) {
    const classes = useStyles();
    let { id } = useParams();
    const dispatch = useDispatch();
    useFirestoreConnect([
        { collection: 'pelanggan', },
        { collection: 'jasa', doc: id },
        {
            collection: 'kategori',
            where: [['for', '==', 'jasa']],
        }
    ])
    const customer = useSelector((state) => state.firestore.ordered.pelanggan)
    const categories = useSelector((state) => state.firestore.ordered.kategori)
    const services = useSelector(({ firestore: { data } }) => data.jasa && data.jasa[id])
    console.log(services);
    const { history } = props;
    const [openCustomer, setOpenCustomer] = React.useState(false);
    const [openCategory, setOpenCategory] = React.useState(false);
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

    if (!id) {
        return <Redirect
            to={{
                pathname: "/notfound",
            }}
        />
    }

    return (
        <Page title="Edit Jasa">
            <CustomerModal open={openCustomer} setOpen={setOpenCustomer} />
            <CategoryModal open={openCategory} setOpen={setOpenCategory} jenis='jasa' />
            <Container>
                {customer && categories ?
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmit()
                        }}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    required
                                    label="Jasa"
                                    defaultValue={services.jasa}
                                    className={classes.margin}
                                    onChange={handleChange('jasa')}
                                />
                                <div className={classes.withButton}>
                                    <TextField
                                        select
                                        fullWidth
                                        required
                                        label="Pelanggan"
                                        defaultValue={services.pelanggan}
                                        className={classes.margin}
                                        value={values.pelanggan}
                                        onChange={handleChange('pelanggan')}
                                    >
                                        {customer.map((option) => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.nama}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <IconButton color="primary" onClick={() => setOpenCustomer(true)}><AddCircleOutlinedIcon fontSize="large" /></IconButton>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    required
                                    defaultValue={services.biaya}
                                    label="Biaya"
                                    className={classes.margin}
                                    onChange={handleChange('biaya')}
                                />
                                <div className={classes.withButton}>
                                    <TextField
                                        select
                                        fullWidth
                                        required
                                        label="Kategori"
                                        className={classes.margin}
                                        value={values.kategori}
                                        onChange={handleChange('kategori')}
                                    >
                                        {categories.map((option) => (
                                            <MenuItem key={option.nama} defaultValue={services.kategori} value={option.nama}>
                                                {option.nama}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <IconButton color="primary" onClick={() => setOpenCategory(true)}><AddCircleOutlinedIcon fontSize="large" /></IconButton>
                                </div>

                            </Grid>
                        </Grid>
                        <TextField
                            fullWidth
                            required
                            label="Deskripsi"
                            defaultValue={services.deskripsi}
                            onChange={handleChange('deskripsi')}
                            className={classes.margin}
                            multiline
                            rows={4}
                            variant="outlined"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            color="secondary"
                        >
                            Tambah
                    </Button>


                    </form> : <Loading />
                }
            </Container>
        </Page>
    );
}

export default withRouter(EditService)
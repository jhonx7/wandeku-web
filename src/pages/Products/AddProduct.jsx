import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, MenuItem, Grid, CircularProgress, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Page } from '../../components';
import { withRouter } from 'react-router-dom';
import {signIn} from '../../store'

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
}));


function AddProduct(props) {
    const classes = useStyles();
    useFirestoreConnect(['kategori'])
    const categories = useSelector((state) => state.firestore.ordered.kategori)

    const { history } = props;
    const [values, setValues] = React.useState({
        nama: '',
        jumlah: 0,
        kategori: 'Umum',
        modal: 0,
        jual: 0,
        grosir: 0,
        deskripsi: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = () => {
        
    }

    return (
        <Page title="Tambah Produk">
            <Container>
                <form noValidate autoComplete="off" 
                    onSubmit
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Nama Produk"
                                className={classes.margin}
                                onChange={handleChange('nama')}
                            />
                            <TextField
                                fullWidth
                                label="Jumlah Stok"
                                className={classes.margin}
                                onChange={handleChange('jumlah')}
                            />

                            {categories ? <TextField
                                select
                                fullWidth
                                label="Kategori"
                                className={classes.margin}
                                value={values.kategori}
                                onChange={handleChange('kategori')}
                            >
                                {categories.map((option) => (
                                    <MenuItem key={option.nama} value={option.nama}>
                                        {option.nama}
                                    </MenuItem>
                                ))}
                            </TextField> : <CircularProgress />}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Harga Modal"
                                className={classes.margin}
                                onChange={handleChange('modal')}
                            />
                            <TextField
                                fullWidth
                                label="Harga Jual"
                                className={classes.margin}
                                onChange={handleChange('jual')}
                            />
                            <TextField
                                fullWidth
                                label="Harga Grosir"
                                className={classes.margin}
                                onChange={handleChange('grosir')}
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        fullWidth
                        label="Deskripsi"
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
                        onClick={() => history.push("/produk")}
                    >
                        Tambah
                    </Button>


                </form>

            </Container>
        </Page>
    );
}

export default withRouter(AddProduct)
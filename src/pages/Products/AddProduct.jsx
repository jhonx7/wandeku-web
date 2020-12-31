import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, MenuItem, Grid, Button, IconButton } from '@material-ui/core';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Page, Loading, CategoryModal } from '../../components';
import { withRouter } from 'react-router-dom';
import { addProduct } from '../../store';

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


function AddProduct(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    useFirestoreConnect([{
        collection: 'kategori',
        where: [['for', '==', 'barang']],
    }])
    const categories = useSelector((state) => state.firestore.ordered.kategori)
    const { history } = props;
    const [values, setValues] = React.useState({
        namaProduk: '',
        stok: 0,
        kategori: 'Umum',
        hargaModal: 0,
        hargaJual: 0,
        hargaGrosir: 0,
        deskripsi: '',
    });
    const [openCategory, setOpenCategory] = React.useState(false);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = async () => {
        await dispatch(addProduct(values))
        await history.push("/produk")
    }

    return (
        <Page title="Tambah Produk">
            <CategoryModal open={openCategory} setOpen={setOpenCategory} jenis='barang' />
            <Container>
                {categories ?
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
                                    label="Nama Produk"
                                    className={classes.margin}
                                    onChange={handleChange('namaProduk')}
                                />
                                <TextField
                                    fullWidth
                                    required
                                    label="Jumlah Stok"
                                    className={classes.margin}
                                    onChange={handleChange('stok')}
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
                                            <MenuItem key={option.nama} value={option.nama}>
                                                {option.nama}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <IconButton color="primary" onClick={() => setOpenCategory(true)}><AddCircleOutlinedIcon fontSize="large" /></IconButton>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    required
                                    label="Harga Modal"
                                    className={classes.margin}
                                    onChange={handleChange('hargaModal')}
                                />
                                <TextField
                                    fullWidth
                                    required
                                    label="Harga Jual"
                                    className={classes.margin}
                                    onChange={handleChange('hargaJual')}
                                />
                                <TextField
                                    fullWidth
                                    required
                                    label="Harga Grosir"
                                    className={classes.margin}
                                    onChange={handleChange('hargaGrosir')}
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            fullWidth
                            required
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
                        >
                            Tambah
                    </Button>


                    </form>
                    : <Loading />}
            </Container>
        </Page>
    );
}

export default withRouter(AddProduct)
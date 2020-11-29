import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, MenuItem, Grid } from '@material-ui/core';
import { Page } from '../../components';

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
const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

export default function AddProduct() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        nama: '',
        jumlah: '',
        kategori: 'EUR',
        modal: '',
        jual: '',
        grosir: '',
        deskripsi: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <Page title="Tambah Produk">
            <Container>
                <form noValidate autoComplete="off">
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
                            <TextField
                                select
                                fullWidth
                                label="Kategori"
                                className={classes.margin}
                                value={values.kategori}
                                onChange={handleChange('kategori')}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
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

                </form>
            </Container>
        </Page>
    );
}

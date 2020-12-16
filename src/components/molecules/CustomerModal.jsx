import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  useDispatch } from 'react-redux';
import { Modal, Backdrop, Fade, Grid, TextField, Button, Typography } from '@material-ui/core';
import { addCustomer } from '../../store';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    margin: {
        margin: theme.spacing(1),
    },
    title: {
        margin: theme.spacing(1),
        fontWeight: 'bold'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: 'center',
    },
}));

export default function CustomerModal(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { open, setOpen } = props;
    const handleClose = () => {
        setOpen(false);
    };

    const [values, setValues] = React.useState({
        namaPelanggan: '',
        noHp: '',
        alamat: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = () => {
        dispatch(addCustomer(values))
        setOpen(false);
    }
    return (

        <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <form
                    className={classes.paper}
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}
                >
                    <Typography className={classes.title} >TAMBAH PELANGGAN</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                required
                                label="Nama Pelanggan"
                                className={classes.margin}
                                onChange={handleChange('namaPelanggan')}
                            />



                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                required
                                label="Nomor HP"
                                className={classes.margin}
                                onChange={handleChange('noHp')}
                            />

                        </Grid>
                    </Grid>
                    <TextField
                        fullWidth
                        required
                        multiline
                        label="Alamat"
                        className={classes.margin}
                        onChange={handleChange('alamat')}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        className={classes.margin}
                    >
                        Tambah
                    </Button>


                </form>
            </Fade>
        </Modal>
    );
}

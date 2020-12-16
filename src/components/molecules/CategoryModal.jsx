import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  useDispatch } from 'react-redux';
import { Modal, Backdrop, Fade, TextField, Button, Typography } from '@material-ui/core';
import { addCategory } from '../../store';


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

export default function CategoryModal(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { jenis, open, setOpen } = props;
    const handleClose = () => {
        setOpen(false);
    };

    const [values, setValues] = React.useState({
        nama: '',
        for: jenis,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = () => {
        dispatch(addCategory(values))
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
                    <Typography className={classes.title} >TAMBAH KATEGORI</Typography>
                    <TextField
                        fullWidth
                        required
                        label="Kategori"
                        className={classes.margin}
                        onChange={handleChange('nama')}
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

import React from 'react'
import { motion } from "framer-motion";
import { withRouter } from "react-router-dom";
import { Container, Grid, Hidden, Paper, Typography } from '@material-ui/core';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab';
import StoreIcon from '@material-ui/icons/Store';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import BuildIcon from '@material-ui/icons/Build';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import PublishIcon from '@material-ui/icons/Publish';
import { makeStyles } from '@material-ui/core/styles';
import { Page } from '../components'

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        flexDirection: "row",
        padding: "10px 30px",
        margin: "20px 0px",
        justifyContent: "space-between",
        alignItems: "center",
        background: theme.primaryGradient,
        color: "#fff",
    },
    headerItem: {
        display: "flex",
        flexDirection: "row",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    caption: {
        padding: 5
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        background: theme.primaryGradient,
        color: "#fff",
        borderRadius: 15,
        cursor: "pointer",
    },
    menu: {
        justifyContent: "center",
        alignItems: "center"
    },
    speedDial: {
        position: 'absolute',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    },
}));

function Dashboard(props) {
    const classes = useStyles();
    const { history } = props;
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Page title="Dashboard">
                <Paper className={classes.header}>
                    <Hidden smDown>
                        <div>
                            <Typography variant="h6">Transaksi</Typography>
                            <Typography variant="caption">{new Date().toLocaleDateString()}</Typography>
                        </div>
                    </Hidden>

                    <div className={classes.headerItem}>
                        <SaveAltIcon fontSize="large" />
                        <div className={classes.caption}>
                            <Typography variant="caption">Pemasukan</Typography>
                            <Typography variant="body1">Rp. 150.000</Typography>
                        </div>
                    </div>
                    <div className={classes.headerItem}>
                        <PublishIcon fontSize="large" />
                        <div className={classes.caption}>
                            <Typography variant="caption">Pengeluaran</Typography>
                            <Typography variant="body1">Rp. 150.000</Typography>
                        </div>
                    </div>
                </Paper>

                <Container >
                    <Grid container spacing={2} className={classes.menu}>
                        <Grid item xs={6} md={2}>
                            <motion.div
                                onClick={() => history.push("/produk")}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Paper className={classes.paper}>
                                    <StoreIcon fontSize="large" />
                                    <Typography>Kelola Produk</Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <motion.div
                                onClick={() => history.push("/jasa")}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Paper className={classes.paper}>
                                    <BuildIcon fontSize="large" />
                                    <Typography>Kelola Jasa</Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <motion.div
                                onClick={() => history.push("/pegawai")}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Paper className={classes.paper}>
                                    <AccountBoxIcon fontSize="large" />
                                    <Typography>Pegawai</Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <motion.div
                                onClick={() => history.push("/hutang")}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Paper className={classes.paper}>
                                    <AccountBalanceWalletIcon fontSize="large" />
                                    <Typography>Hutang Piutang</Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <motion.div
                                onClick={() => history.push("/pembiayaan")}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Paper className={classes.paper}>
                                    <ShoppingCartIcon fontSize="large" />
                                    <Typography>Pembiayaan</Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <motion.div
                                onClick={() => history.push("/laporan")}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Paper className={classes.paper}>
                                    <BarChartIcon fontSize="large" />
                                    <Typography>Laporan</Typography>
                                </Paper>
                            </motion.div>
                        </Grid>

                        <SpeedDial
                            ariaLabel="SpeedDial"
                            className={classes.speedDial}
                            icon={<SpeedDialIcon />}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            open={open}
                        >

                            <SpeedDialAction
                                icon={<LocalAtmIcon />}
                                tooltipTitle="Transaksi"
                                tooltipOpen
                                onClick={() => history.push("/transaksi")}
                            />
                            <SpeedDialAction
                                icon={<BuildIcon />}
                                tooltipTitle="Jasa"
                                tooltipOpen
                                onClick={() => history.push("/tambahJasa")}
                            />
                            <SpeedDialAction
                                icon={<AccountBalanceWalletIcon />}
                                tooltipTitle="Hutang"
                                tooltipOpen
                                onClick={() => history.push("/tambahHutang")}
                            />

                        </SpeedDial>
                    </Grid>
                </Container>
            </Page>
        </>
    )
}

export default withRouter(Dashboard)

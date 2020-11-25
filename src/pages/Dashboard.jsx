import React from 'react'
import { Container, Grid, Hidden, Paper, Typography } from '@material-ui/core'
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import PublishIcon from '@material-ui/icons/Publish';
import { makeStyles } from '@material-ui/core/styles';
import Page from '../components/molecules/Page'

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        flexDirection: "row",
        padding: "10px 30px",
        margin: "20px 0px",
        justifyContent: "space-between",
        alignItems: "center",
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
        color: theme.palette.text.secondary,
    },
    menu:{
        justifyContent:"center",
        alignItems: "center"
    }
}));

function Dashboard() {
    const classes = useStyles();

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
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Paper className={classes.paper}>xs=3</Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Page>
        </>
    )
}

export default Dashboard

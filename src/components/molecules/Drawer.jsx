import React from 'react';
import clsx from 'clsx';
import { withRouter } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppsIcon from '@material-ui/icons/Apps';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import HistoryIcon from '@material-ui/icons/History';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    profile: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        margin: 5,
        padding: 3,

    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        backgroundColor: theme.palette.primary.main
    },
    name: {
        padding: 5,
        marginLeft: 10,
        marginRight: 10
    },
    menu: {
        color: "black",
        fontWeight: "bold",
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 5,
        '&:hover': {
            boxShadow: '0 1px 9px 1px grey',
        },
    },
    active: {
        background: theme.primaryGradient,
        color: "white",
        '&:hover': {
            boxShadow: '0 1px 9px 1px #53D4F1',
        },
    }
}));

function Drawer(props) {
    const classes = useStyles();
    const firebase = useFirebase();
    const profile = useSelector(state => state.firebase.profile);

    const { isOpen, setOpen, history } = props;
    const active = clsx(classes.menu, classes.active);
    //const [isOpen, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <SwipeableDrawer
                anchor="left"
                open={isOpen}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={() => setOpen(false)}
                    onKeyDown={() => setOpen(false)}
                >
                    <Container className={classes.profile}>
                        <Avatar className={classes.avatar}>{profile.initial}</Avatar>
                        <div className={classes.name}>
                            <Typography variant="body1">{profile.firstName+' '+profile.lastName}</Typography>
                            <Divider />
                            <Typography variant="caption">{profile.role}</Typography>
                        </div>
                    </Container>
                    <Divider />
                    <Container>
                        <List>
                            <motion.div
                                className={history.location.pathname.startsWith("/dashboard") ? active : classes.menu}
                                onClick={() => history.push("/dashboard")}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ListItem button >
                                    <ListItemIcon><AppsIcon /></ListItemIcon>
                                    <ListItemText primary="Dashboard" />
                                </ListItem>
                            </motion.div>
                            <motion.div
                                className={history.location.pathname.startsWith("/transaksi") ? active : classes.menu}
                                onClick={() => history.push("/transaksi")}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ListItem button >
                                    <ListItemIcon><LocalAtmIcon /></ListItemIcon>
                                    <ListItemText primary="Transaksi" />
                                </ListItem>
                            </motion.div>
                            <motion.div
                                className={history.location.pathname.startsWith("/riwayat") ? active : classes.menu}
                                onClick={() => history.push("/riwayat")}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ListItem button >
                                    <ListItemIcon><HistoryIcon /></ListItemIcon>
                                    <ListItemText primary="Riwayat" />
                                </ListItem>
                            </motion.div>
                            <motion.div
                                className={history.location.pathname.startsWith("/laporan") ? active : classes.menu}
                                onClick={() => history.push("/laporan")}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ListItem button >
                                    <ListItemIcon><BarChartIcon /></ListItemIcon>
                                    <ListItemText primary="Laporan" />
                                </ListItem>
                            </motion.div>

                        </List>
                    </Container>
                    <Divider />
                    <List>
                        <ListItem button  onClick={() => history.push("/pengaturan")} >
                            <ListItemIcon><SettingsIcon /></ListItemIcon>
                            <ListItemText primary="Pengaturan" />
                        </ListItem>
                        <ListItem button onClick={() => firebase.logout()} >
                            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
        </React.Fragment>
    );
}

export default withRouter(Drawer);
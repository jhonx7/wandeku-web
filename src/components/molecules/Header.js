import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: "2vh 15vh",
    [theme.breakpoints.up('md')]: {
        height: "15vh",
        width: "80vh"
    },
    [theme.breakpoints.down('md')]: {
        margin: 0,
    },
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,

  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const {isOpen, setIsOpen} = props

    return (
        <Paper className={classes.root}>
            <form className={classes.search}>
                
                <InputBase
                    className={classes.input}
                    placeholder="Cari Barang"
                    inputProps={{ 'aria-label': 'Cari Barang' }}
                />
                <IconButton type="submit" className={classes.iconButton}>
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton color="inherit" className={classes.iconButton}>
                    <PhotoCameraIcon />
                </IconButton>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Avatar>H</Avatar>
                </motion.div>
            </form>
        </Paper>
    );
}

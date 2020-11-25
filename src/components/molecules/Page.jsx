import React from 'react';
import clsx from 'clsx';
import { motion, useCycle } from "framer-motion";
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from './Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    marginTop: '10vh',
    padding: 10,
    display: 'flex',
    flexDirection: "column",
    height: '100vh',
    overflow: 'auto',
  },
}));

export default function Page({ children }) {
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer isOpen={isOpen} setOpen={setOpen} />
      <AppBar position="fixed" color="transparent">
        <Toolbar >
          <IconButton onClick={() => setOpen(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className={classes.content}>

        {children}

      </Container>

    </div>
  );
}

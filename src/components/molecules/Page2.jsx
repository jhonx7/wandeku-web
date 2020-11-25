import React from 'react';
import clsx from 'clsx';
import { motion, useCycle } from "framer-motion";
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar'
import Header from './Header'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "row",
    backgroundColor: "#F4F5F8",
    overflow: "visible",
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    display: 'flex',
    flexDirection: "column",
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    
  },
}));

export default function Dashboard({children}) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useCycle(true, false);
  const firebase = useFirebase();
  const profile = useSelector(state => state.firebase.profile);

  const logout = () => {
    firebase.logout()
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <main className={classes.content}>
        {/* <Header isOpen={isOpen} setIsOpen={setIsOpen}/> */}
        <Container className={classes.container}>
          
          {children}
        </Container>
      </main>
    </div>
  );
}
import React, {memo} from 'react'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import { Container, CircularProgress } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));


function AuthIsLoaded({ children }) {
  const classes = useStyles();
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <Container className={classes.container}><CircularProgress/></Container>;
  return children
}

export default memo(AuthIsLoaded);
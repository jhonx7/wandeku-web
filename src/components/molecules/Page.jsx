import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from './Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F4F5F8",
  },
  AppBar: {
    background: theme.primaryGradient,
    color: "#fff"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  content: {
    padding: 10,
    display: 'flex',
    flexDirection: "column",
    overflow: 'auto',
    height: '89vh',
  },
}));

export default function Page(props) {
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);
  const {title} = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer isOpen={isOpen} setOpen={setOpen} />
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar >
          <IconButton onClick={() => setOpen(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.content}>

        {props.children}

      </main>

    </div>
  );
}

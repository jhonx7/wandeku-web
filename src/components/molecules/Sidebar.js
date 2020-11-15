import React, {useRef} from 'react';
import { Link, NavLink, withRouter } from "react-router-dom";
import clsx from 'clsx';
import { motion } from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppsIcon from '@material-ui/icons/Apps';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        display: 'flex',
        flexDirection: "column",
        padding: 5,
        width: "12vh",
        alignItems: "center",
        background: theme.primaryGradient
    },
    logo: {
        width: 55,
        height: 55,
        padding: 6,
        cursor: "pointer",
        marginBottom: 30
    },
    menu: {
        width: 55,
        height: 55,
        margin: "1vh",
        padding: "1vh",
        color: "black",
        textAlign: "center",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: 9,
        borderRadius: 10,
        cursor: "pointer",
        '&:hover': {
            boxShadow: '0 1px 9px 1px #53D4F1',
            
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

const rootvariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(25px at 45px 35px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

const Sidebar = (props) => {
    const classes = useStyles();
    const containerRef = useRef(null);
    const {isOpen, setIsOpen} = props
    const active = clsx(classes.menu, classes.active);
    const {history } = props


    return (
        <motion.nav 
            className={classes.sidebar}
            animate={isOpen ? "open" : "closed"}
            variants={rootvariants}
            ref={containerRef}
        >
            <div onClick={() => setIsOpen(!isOpen)} className={classes.logo}><img src="/svg/Asset-1.svg" style={{ height: 50, width: 50, }} alt="Wandeku" /></div>
            <motion.div 
                variants={navVariants}
            >
                <motion.div 
                    className={history.location.pathname.startsWith("/dashboard") ? active : classes.menu}
                    onClick={()=>history.push("/dashboard")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <AppsIcon />Dashboard
                </motion.div>
                <motion.div 
                    className={history.location.pathname.startsWith("/penjualan") ? active : classes.menu}
                    onClick={()=>history.push("/penjualan")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <TrendingUpIcon />Penjualan
                </motion.div>
                <motion.div 
                    className={history.location.pathname.startsWith("/pembelian") ? active : classes.menu}
                    onClick={()=>history.push("/pembelian")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ShoppingCartIcon />Pembelian
                </motion.div>
                <motion.div 
                    className={history.location.pathname.startsWith("/pesanan") ? active : classes.menu}
                    onClick={()=>history.push("/pesanan")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <MoveToInboxIcon />Pesanan
                </motion.div>
                <motion.div 
                    className={history.location.pathname.startsWith("/laporan") ? active : classes.menu}
                    onClick={()=>history.push("/laporan")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ReceiptIcon />Laporan
                </motion.div>
            </motion.div>
        </motion.nav>
    )
}

export default withRouter(Sidebar)

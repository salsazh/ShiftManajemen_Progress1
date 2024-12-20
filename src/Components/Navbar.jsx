import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        backgroundColor: '#0D47A1',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '60px', 
    },
    spacing :{
        paddingLeft: 20,
        color: '#fff',
        fontSize: '24px',
        textDecoration: 'none',
        margin: '0 15px',
    }
  });

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar >
                <NavLink to="/" className={classes.spacing}> Home</NavLink> 
                <NavLink to="all" className={classes.spacing}> All Users</NavLink>
                <NavLink to="add" className={classes.spacing}> Add Users</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
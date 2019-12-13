import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CardMedia from '@material-ui/core/CardMedia';
//import Typography from '@material/typography';


const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="title" color="inherit">
                    React & Material-UI
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
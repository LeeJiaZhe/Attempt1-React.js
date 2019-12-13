//import React from 'react';
//import logo from './logo.svg';




import React, { Component } from 'react';
//import Bookmarks from '@material-ui/icons/Bookmarks';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NavBar from './NavBar';
import MediaCard from './Card';
import CardMedia from '@material-ui/core/CardMedia';
import './App.css';

//const isMobile = (magic);

class App extends Component {
  render() {

    return (
      <div>
        <NavBar />
        <Button variant="contained" color="primary">
          
          Welcome Material UI
        </Button> <br></br>
        <TextField
            placeholder="Owlnext"
            label="Basic TextField" />
        <MediaCard />
      </div>
    );
  }
}


export default App;

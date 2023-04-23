import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

// import { AppStyle } from "./App/App.styled";

class App extends Component {
  state = {
    searchQuery: '',
  };

  handleFormSubmit = async userSearch => {
    this.setState({ searchQuery: userSearch });
  };

  nextPage = () => {
    this.setState(pervState => {
      return {  };
    });
  };


  render() {
    return (
      <>
        <ToastContainer />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery} />
      </>
    );
  }
}

export default App;

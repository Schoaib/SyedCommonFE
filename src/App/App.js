//@flow
import React, {Component} from 'react';
import logo from './images/logo.svg';
import './styles.css';
import {Catalog} from '../Components';

const BACKEND_API = "http://localhost:8080/mamas&papas";
const PRODUCT_IMAGE_PATH = "//prod2.mnpcdn.ae/small_light(p=listing2x,of=webp)/pub/media/catalog/product/";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </div>
        <Catalog backendApi={BACKEND_API} productImagePath={PRODUCT_IMAGE_PATH}></Catalog>
      </div>
    );
  }
}

export default App;

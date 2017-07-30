// @flow

import React from 'react';
import {MuiThemeProvider} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import './styles.css';
import Client from "../Api";
import CatalogFilter from "../CatalogFilter";
import CatalogProducts from "../CatalogProducts"
import PropTypes from 'prop-types';

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      colors: {}
    };
  }

  componentDidMount() {
    if (this.props.backendApi) {
      Client.post(this.props.backendApi + '/search', {}, products => {
        this.setState({products: products});
      });
      Client.get(this.props.backendApi + '/colors', colors => {
        this.setState({colors: colors});
      });
    }
  }

  handleClick = color => {
    Client.post(this.props.backendApi + '/search', {
      color: color
    }, products => {
      this.setState({products: products});
    });
  };

  render() {
    return (
      <div className="Container">
        <MuiThemeProvider>
          <Grid container gutter={24}>
            <Grid item md={3} sm={3} xs={11}>
              <CatalogFilter colors={this.state.colors} handler={this.handleClick}/>
            </Grid>
            <Grid item md={9} sm={8} xs={11}>
              <CatalogProducts products={this.state.products} productImagePath={this.props.productImagePath}/>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

Catalog.propTypes = {
  backendApi: PropTypes.string.isRequired,
  productImagePath: PropTypes.string.isRequired
};

export default Catalog;

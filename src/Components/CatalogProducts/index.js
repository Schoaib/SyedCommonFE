// @flow
import React from 'react';
import CatalogProduct from '../CatalogProduct';
import Grid from 'material-ui/Grid';
import './styles.css';
import PropTypes from 'prop-types';

class CatalogProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({products: nextProps.products});
  }

render () {
  return (
    <div className="Container-Products">
      <span className="Count">
        {this.state.products.length}
        &nbsp;ITEMS
      </span>
      <Grid container gutter={24}>
        {this.state.products && this.state.products.map((product, index) => {
          return <CatalogProduct product={product} productImagePath={this.props.productImagePath}></CatalogProduct>;
        })}
      </Grid>
    </div>
  );
}
}

CatalogProducts.propTypes = {
  productImagePath: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
};


export default CatalogProducts;

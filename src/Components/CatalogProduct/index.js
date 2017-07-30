// @flow
import React from 'react';
import Grid from 'material-ui/Grid';
import './styles.css';
import PropTypes from 'prop-types';


function CatalogProduct(props) {
  const product = props.product;
  const productImagePath = props.productImagePath;
  return (
        <Grid item xs={6} sm={6} md={4}>
          <img src={productImagePath + product.image} className="Product-image" alt="product" />
          <p className="Product-title"> {product.name} </p>
          <p className="Product-price">{product.price.toFixed(2)} AED</p>
        </Grid>
  );
}


CatalogProduct.propTypes = {
  productImagePath: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired
};

export default CatalogProduct;

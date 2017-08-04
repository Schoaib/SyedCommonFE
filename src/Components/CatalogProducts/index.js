// @flow
import React from 'react';
import CatalogProduct from '../CatalogProduct';
import Grid from 'material-ui/Grid';
import './styles.css';
import PropTypes from 'prop-types';

const CatalogProducts = ({products,productImagePath}) => {

  return (
    <div className="Container-Products">
      <span className="Count">
        {products.length}
        &nbsp;ITEMS
      </span>
      <Grid container gutter={24}>
        {products && products.map((product, index) => {
          return <CatalogProduct product={product} productImagePath={productImagePath}></CatalogProduct>
        })}
      </Grid>
    </div>
  );
}


CatalogProducts.propTypes = {
  productImagePath: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
};


export default CatalogProducts;

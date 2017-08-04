import React from 'react';
import CatalogProduct from '../CatalogProduct';
import Grid from 'material-ui/Grid';
import './styles.css';
import PropTypes from 'prop-types';

var CatalogProducts = function CatalogProducts(_ref) {
  var products = _ref.products,
      productImagePath = _ref.productImagePath;


  return React.createElement(
    'div',
    { className: 'Container-Products' },
    React.createElement(
      'span',
      { className: 'Count' },
      products.length,
      '\xA0ITEMS'
    ),
    React.createElement(
      Grid,
      { container: true, gutter: 24 },
      products && products.map(function (product, index) {
        return React.createElement(CatalogProduct, { product: product, productImagePath: productImagePath });
      })
    )
  );
};

CatalogProducts.propTypes = {
  productImagePath: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
};

export default CatalogProducts;
//# sourceMappingURL=index.js.map
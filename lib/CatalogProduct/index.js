import React from 'react';
import Grid from 'material-ui/Grid';
import './styles.css';
import PropTypes from 'prop-types';

function CatalogProduct(props) {
  var product = props.product;
  var productImagePath = props.productImagePath;
  return React.createElement(
    Grid,
    { item: true, xs: 6, sm: 6, md: 4 },
    React.createElement('img', { src: productImagePath + product.image, className: 'Product-image', alt: 'product' }),
    React.createElement(
      'p',
      { className: 'Product-title' },
      ' ',
      product.name,
      ' '
    ),
    React.createElement(
      'p',
      { className: 'Product-price' },
      product.price.toFixed(2),
      ' AED'
    )
  );
}

CatalogProduct.propTypes = {
  productImagePath: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired
};

export default CatalogProduct;
//# sourceMappingURL=index.js.map
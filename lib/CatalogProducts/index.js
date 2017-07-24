var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import CatalogProduct from '../CatalogProduct';
import Grid from 'material-ui/Grid';
import './styles.css';
import PropTypes from 'prop-types';

var CatalogProducts = function (_React$Component) {
  _inherits(CatalogProducts, _React$Component);

  function CatalogProducts(props) {
    _classCallCheck(this, CatalogProducts);

    var _this = _possibleConstructorReturn(this, (CatalogProducts.__proto__ || Object.getPrototypeOf(CatalogProducts)).call(this, props));

    _this.state = {
      products: props.products
    };
    return _this;
  }

  _createClass(CatalogProducts, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ products: nextProps.products });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'Container-Products' },
        React.createElement(
          'span',
          { className: 'Count' },
          this.state.products.length,
          '\xA0ITEMS'
        ),
        React.createElement(
          Grid,
          { container: true, gutter: 24 },
          this.state.products && this.state.products.map(function (product, index) {
            return React.createElement(CatalogProduct, { product: product, productImagePath: _this2.props.productImagePath });
          })
        )
      );
    }
  }]);

  return CatalogProducts;
}(React.Component);

CatalogProducts.propTypes = {
  productImagePath: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
};

export default CatalogProducts;
//# sourceMappingURL=index.js.map
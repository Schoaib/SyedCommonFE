var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import './styles.css';
import Client from "../Api";
import CatalogFilter from "../CatalogFilter";
import CatalogProducts from "../CatalogProducts";
import PropTypes from 'prop-types';

var Catalog = function (_React$Component) {
  _inherits(Catalog, _React$Component);

  function Catalog(props) {
    _classCallCheck(this, Catalog);

    var _this = _possibleConstructorReturn(this, (Catalog.__proto__ || Object.getPrototypeOf(Catalog)).call(this, props));

    _this.handleClick = function (color) {
      Client.post(_this.props.backendApi + '/search', {
        color: color
      }, function (products) {
        _this.setState({ products: products });
      });
    };

    _this.state = {
      products: [],
      colors: {}
    };
    return _this;
  }

  _createClass(Catalog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.backendApi) {
        Client.post(this.props.backendApi + '/search', {}, function (products) {
          _this2.setState({ products: products });
        });
        Client.get(this.props.backendApi + '/colors', function (colors) {
          _this2.setState({ colors: colors });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'Container' },
        React.createElement(
          MuiThemeProvider,
          null,
          React.createElement(
            Grid,
            { container: true, gutter: 24 },
            React.createElement(
              Grid,
              { item: true, md: 3, sm: 3, xs: 11 },
              React.createElement(CatalogFilter, { colors: this.state.colors, handler: this.handleClick })
            ),
            React.createElement(
              Grid,
              { item: true, md: 9, sm: 8, xs: 11 },
              React.createElement(CatalogProducts, { products: this.state.products, productImagePath: this.props.productImagePath })
            )
          )
        )
      );
    }
  }]);

  return Catalog;
}(React.Component);

Catalog.propTypes = {
  backendApi: PropTypes.string.isRequired,
  productImagePath: PropTypes.string.isRequired
};

export default Catalog;
//# sourceMappingURL=index.js.map
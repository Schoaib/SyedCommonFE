var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import './styles.css';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

var CatalogFilter = function (_React$Component) {
  _inherits(CatalogFilter, _React$Component);

  function CatalogFilter(props) {
    _classCallCheck(this, CatalogFilter);

    var _this = _possibleConstructorReturn(this, (CatalogFilter.__proto__ || Object.getPrototypeOf(CatalogFilter)).call(this, props));

    _this.onMouseOver = function (color) {
      _this.setState({ hover: color });
    };

    _this.onMouseLeave = function () {
      _this.setState({ hover: '' });
    };

    _this.handler = function (color) {
      _this.setState({ searchedColor: color });
      _this.props.handler(color);
    };

    _this.state = {
      colors: props.colors,
      searchedColor: ""
    };
    return _this;
  }

  _createClass(CatalogFilter, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ colors: nextProps.colors });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'Container-Products' },
        React.createElement(
          'h4',
          null,
          'Refine Category'
        ),
        React.createElement(
          'h5',
          null,
          'Colour... ',
          this.state.searchedColor !== "" && React.createElement(
            'a',
            { className: 'Clear-filters', onClick: function onClick() {
                return _this2.handler("");
              } },
            'Clear Filters'
          )
        ),
        React.createElement(
          'div',
          { className: 'Center' },
          Object.keys(this.state.colors).map(function (color) {
            return _this2.state.colors[color] && _this2.state.colors[color].indexOf('#') > -1 ? React.createElement(
              'div',
              { className: 'Filter-Div' },
              React.createElement(
                'a',
                { className: 'Color-filter', onClick: function onClick() {
                    return _this2.handler(color);
                  }, onMouseEnter: function onMouseEnter() {
                    return _this2.onMouseOver(color);
                  }, onMouseLeave: function onMouseLeave() {
                    return _this2.onMouseLeave(color);
                  }, style: {
                    backgroundColor: _this2.state.colors[color]
                  } },
                (_this2.state.hover === color || _this2.state.searchedColor === color) && React.createElement(
                  'i',
                  null,
                  React.createElement(FontAwesome, { className: 'fa fa-check' })
                )
              )
            ) : React.createElement(
              'div',
              { className: 'Filter-Div' },
              React.createElement(
                'a',
                { className: 'Color-filter ', onClick: function onClick() {
                    return _this2.handler(color);
                  }, onMouseEnter: function onMouseEnter() {
                    return _this2.onMouseOver(color);
                  }, onMouseLeave: function onMouseLeave() {
                    return _this2.onMouseLeave(color);
                  } },
                (_this2.state.hover === color || _this2.state.searchedColor === color) && React.createElement(
                  'i',
                  null,
                  React.createElement(FontAwesome, { className: 'fa fa-check' })
                ),
                React.createElement(
                  'span',
                  { className: 'Color-image' },
                  React.createElement('img', { className: 'Img', src: "//prod2.mnpcdn.ae/small_light(cw=70,ch=70,dw=70,dh=70,of=webp,q=90)/media/attribute/swatch" + _this2.state.colors[color], alt: color })
                )
              )
            );
          })
        )
      );
    }
  }]);

  return CatalogFilter;
}(React.Component);

CatalogFilter.propTypes = {
  colors: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired
};

export default CatalogFilter;
//# sourceMappingURL=index.js.map
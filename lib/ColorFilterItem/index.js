import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

var ColorFilterItem = function ColorFilterItem(_ref) {
  var color = _ref.color,
      colorCode = _ref.colorCode,
      showIcon = _ref.showIcon,
      colorImagePath = _ref.colorImagePath,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      showImage = _ref.showImage;

  return React.createElement(
    'div',
    { className: 'Filter-Div' },
    React.createElement(
      'a',
      { className: 'Color-filter', onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, style: {
          backgroundColor: colorCode
        } },
      showIcon && React.createElement(
        'i',
        null,
        React.createElement(FontAwesome, { className: 'fa fa-check' })
      ),
      showImage && React.createElement(
        'span',
        { className: 'Color-image' },
        React.createElement('img', { className: 'Img', src: colorImagePath + colorCode, alt: color })
      )
    )
  );
};

ColorFilterItem.propTypes = {
  color: PropTypes.string.isRequired,
  colorCode: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  showIcon: PropTypes.bool.isRequired,
  showImage: PropTypes.bool.isRequired
};

export default ColorFilterItem;
//# sourceMappingURL=index.js.map
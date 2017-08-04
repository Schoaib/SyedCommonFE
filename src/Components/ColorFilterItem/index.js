// @flow
import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const ColorFilterItem = ({
  color,
  colorCode,
  showIcon,
  colorImagePath,
  onMouseEnter,
  onMouseLeave,
  onClick,
  showImage
}) => {
  return (
    <div className="Filter-Div">
      <a className="Color-filter" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{
        backgroundColor: colorCode
      }}>
        {showIcon && <i><FontAwesome className='fa fa-check'/></i>
        }
        {showImage && <span className="Color-image">
          <img className="Img" src={colorImagePath + colorCode} alt={color}/>
        </span>
        }
      </a>
    </div>
  );
}

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

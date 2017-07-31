// @flow
import React from 'react';
import './styles.css';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';


class CatalogFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: props.colors,
      searchedColor: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({colors: nextProps.colors});
  }

  onMouseOver = (color) => {
    this.setState({hover: color});
  }

  onMouseLeave = () => {
    this.setState({hover: ''});
  }

  handler = color => {
    this.setState({searchedColor: color});
    this.props.handler(color);
  };

  render() {
    return (
      <div className="Container-Products">
        <h4>Refine Category</h4>
        <h5>Colour... {this.state.searchedColor !== "" && <a  className="Clear-filters" onClick={() => this.handler("")}>Clear Filters</a>
        }</h5>
        <div className="Center">
          {Object.keys(this.state.colors).map((color) => this.state.colors[color] && this.state.colors[color].indexOf('#') > -1
            ? (
              <div className="Filter-Div">
                <a className="Color-filter"  onClick={() => this.handler(color)} onMouseEnter={() => this.onMouseOver(color)} onMouseLeave={() => this.onMouseLeave(color)} style={{
                  backgroundColor: this.state.colors[color]
                }}>
                  {(this.state.hover === color || this.state.searchedColor === color) && <i><FontAwesome className='fa fa-check'/></i>
                  }
                </a>
              </div>
            )
            : (
              <div className="Filter-Div">
                <a className="Color-filter "  onClick={() => this.handler(color)} onMouseEnter={() => this.onMouseOver(color)} onMouseLeave={() => this.onMouseLeave(color)}>
                  {(this.state.hover === color || this.state.searchedColor === color) && <i><FontAwesome className='fa fa-check'/></i>
                  }
                  <span className="Color-image">
                    <img className="Img" src={"//prod2.atgcdn.ae/small_light(cw=70,ch=70,dw=70,dh=70,of=webp,q=90)/media/attribute/swatch" + this.state.colors[color]} alt={color}/>
                  </span>
                </a>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

CatalogFilter.propTypes = {
  colors: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired
};

export default CatalogFilter;

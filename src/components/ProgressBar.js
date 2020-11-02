import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'

class ProgressBar extends Component {
  /**
   * React Component constructor.
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      show: props.show
    }
  }

  /**
   * Update state based nextProps.
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show
    });
  }

  /**
   * Render div with class.
   * @returns {XML}
   */
  renderProgressBar() {
    if (this.state.show) {
      return (
        <div className="indeterminate" data-color={this.props.color} />
      );
    } else {
      return null;
    }
  }

  /**
   * React render.
   * @returns {XML}
   */
  render() {
    return (this.renderProgressBar());
  }
}

/**
 * Component PropTypes
 * @type {{show: *, overlay: *}}
 */
ProgressBar.propTypes = {
  show: PropTypes.bool,
  color: PropTypes.string
};

export default ProgressBar;

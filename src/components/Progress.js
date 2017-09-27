import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Progress.css';

class Progress extends Component {
  /**
   * React Component constructor.
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
      showOverlay: props.showOverlay || false
    }
  }

  /**
   * Update state based nextProps.
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show,
      showOverlay: nextProps.showOverlay || false
    });
  }

  /**
   * Render div with class.
   * @returns {XML}
   */
  renderProgressBar() {
    if (this.state.show) {
      return(
        <div className="progress-line"></div>
      )
    }
  }

  /**
   * Render overlay.
   * @returns {XML}
   */
  renderOverlay() {
    if (this.state.showOverlay) {
      return (
        <div className="progress-overlay"></div>
      )
    }
  }

  /**
   * React render.
   * @returns {XML}
   */
  render() {
    return (
      <div className="progress">
        {this.renderProgressBar()}
        {this.renderOverlay()}
      </div>
    );
  }
}

/**
 * Component PropTypes
 * @type {{show: *, showOverlay: *}}
 */
Progress.propTypes = {
  show: PropTypes.bool,
  showOverlay: PropTypes.bool
};

export default Progress;

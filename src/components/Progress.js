import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Line } from './line';
import { Overlay } from './overlay';


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
      return (
        <Line />
      );
    } else {
      return (null);
    }
  }

  /**
   * Render overlay.
   * @returns {XML}
   */
  renderOverlay() {
    if (this.state.showOverlay) {
      return (
        <Overlay />
      );
    } else {
      return (null);
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

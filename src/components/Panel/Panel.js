/*
 * Copyright (c) 2017. Helmetrex Ltd.
 */

/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import PropTypes from 'prop-types';

import s from './Panel.css';

class Panel extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.object,
    onClick: PropTypes.func.isRequired,
  };

  static contextTypes = {
    controller: PropTypes.func,
  };

  static defaultProps = {
    data: '{}',
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     textInState: 'No text',
  //   };
  // }

  handleClick = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onClick();
  };

  render() {
    return (
      <div className={s.panelContainer}>
        <pre>
          <code>{JSON.stringify(this.props.data, null, 4)}</code>
        </pre>
        <div>
          <button onClick={this.handleClick}>Call some test method</button>
        </div>
      </div>
    );
  }
}

export default Panel;

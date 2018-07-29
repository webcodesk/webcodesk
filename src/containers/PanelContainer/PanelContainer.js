/*
 * Copyright (c) 2017. Helmetrex Ltd.
 */

/* eslint-disable no-return-assign,react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectPanelData, selectPanelSomeTestMethodResult } from 'actions/panel/selectors';
import { setPanelData, callSomeTestMethod } from 'actions/panel';
import Panel from 'components/Panel/Panel';

class PanelContainer extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/require-default-props
    data: PropTypes.object,
    // eslint-disable-next-line react/require-default-props
    someTestMethodResult: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: {},
    someTestMethodResult: {},
  };

  componentDidMount() {
    this.props.dispatch(
      setPanelData({ data: { title: 'From the component did mount' } }),
    );
  }

  handlePanelClick = () => {
    this.props.dispatch(
      callSomeTestMethod()
    )
  };

  render() {
    const { data, someTestMethodResult } = this.props;
    return <Panel data={{...data, ...someTestMethodResult}} onClick={this.handlePanelClick} />;
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectPanelData(),
  someTestMethodResult: selectPanelSomeTestMethodResult(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PanelContainer);

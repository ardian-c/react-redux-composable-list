import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../ducks';

const withSelectables = (configuration = {}) => (Enhanced) => {
  class WithSelectables extends Component {
    getChildContext() {
      return {
        isSelectable: true,
      };
    }

    componentDidMount() {
      const { onSelectItems } = this.props;
      onSelectItems(configuration.ids || []);
    }

    render() {
      return <Enhanced isSelectable={true} { ...this.props } />;
    }
  }

  const mapDispatchToProps = (dispatch, { stateKey }) => ({
    onSelectItems: bindActionCreators((ids) => actionCreators.doSelectItems(stateKey, ids, true), dispatch),
  });

  WithSelectables.childContextTypes = {
    isSelectable: PropTypes.bool,
  };

  return connect(null, mapDispatchToProps)(WithSelectables);
};

export default withSelectables;

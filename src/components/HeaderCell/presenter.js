import React from 'react';
import '../style.less';

const HeaderCell = ({
  style,
  className = '',
  children
}) =>
  <div
    className={className || 'react-redux-composable-list-cell'}
    style={style}
  >
    {children}
  </div>;

HeaderCell.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default HeaderCell;

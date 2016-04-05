import React, {Component, PropTypes} from 'react';

// Returns a td for the Vulnerability class
export default class Severity extends Component {
  render() {
    let {value} = this.props;
    return <td className="severity">
      <div className={value}>{value}</div>
    </td>;
  }
}

Severity.propTypes = {
  value: PropTypes.string.isRequired
}

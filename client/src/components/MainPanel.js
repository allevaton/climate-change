import React, {Component, PropTypes} from 'react';

export default class MainPanel extends Component {
  render() {
    return (
      <div
        className="main-panel"
        style={{display: this.props.visible ? 'block' : 'none'}}>

        <div className="header">
          <i className="glyphicon glyphicon-remove" onClick={this.props.onCloseClicked} />
        </div>
      </div>
    );
  }
}

MainPanel.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCloseClicked: PropTypes.func.isRequired
};

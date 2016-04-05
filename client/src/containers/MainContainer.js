import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';

import MainPanel from '../components/MainPanel';

// TODO why is this container even here?
class MainContainer extends Component {
  render() {
    return (
      <MainPanel
        {...this.props}
        />
    );
  }
}

MainPanel.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCloseClicked: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(MainContainer);

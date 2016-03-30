import {connect} from 'react-redux';
import React, {Component} from 'react';

import Map from './Map';
import MainContainer from './MainContainer';

class App extends Component {
  // TODO move this state to redux state
  state = {
    mainContainerVisible: true
  }

  markerClick(area) {
    this.setState({
      mainContainerVisible: true
    })
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <div className="lightbox" style={{display: this.state.mainContainerVisible ? 'block' : 'none'}}/>

        <Map markerClick={::this.markerClick}/>

        <MainContainer
          visible={this.state.mainContainerVisible}
          onCloseClicked={() => {
            this.setState({
              mainContainerVisible: false
            })
          }}
          />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

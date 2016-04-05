import {connect} from 'react-redux';
import React, {Component} from 'react';

import Map from './Map';
import MainContainer from './MainContainer';

import {changeArea, fetchAreaDataIfNeeded} from '../actions/area'

class App extends Component {
  // TODO move this state to redux state
  state = {
    mainContainerVisible: false
  }

  markerClick(area) {
    this.setState({
      ...this.state,
      mainContainerVisible: true
    });

    this.props.changeSelectedArea(area.id);
  }

  mapOnClick(e) {
  }

  render() {
    return (
      <div style={{height: '100%'}} >
        <div
          className="lightbox"
          style={{display: this.state.mainContainerVisible ? 'block' : 'none'}}
          />

        <Map
          markerClick={::this.markerClick}
          mapOnClick={::this.mapOnClick}
          />

        <MainContainer
          visible={this.state.mainContainerVisible}
          area={this.props.area}
          onCloseClicked={() => {
            this.setState({
              ...this.state,
              mainContainerVisible: false
            })
          }}
          />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // area: Object.assign({}, state.areas[state.areas.selectedArea], state.index.areas[state.areas.selectedArea])
    area: {
      ...state.areas[state.areas.selectedArea],
      ...state.index.areas[state.areas.selectedArea]
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeSelectedArea(areaId) {
      dispatch(fetchAreaDataIfNeeded(areaId));
      dispatch(changeArea(areaId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

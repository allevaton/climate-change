import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';

import {getFloorsForArea} from '../selectors';
import {changeAreaFloor} from '../actions/area';

class FloorSelector extends Component {
  render() {
    let {floors, onChange, areaId, selectedFloor} = this.props;
    // TODO:10 put selected here with "active" class
    return (
      <ul className="floor-list">
        {floors && floors.map((floor, i) => {
          return (<li
            key={i}
            className={selectedFloor === floor ? 'active' : ''}
            onClick={() => {
              onChange(areaId, floor)
            }}>
            {floor}
          </li>)
        })}
      </ul>
    )
  }
}

FloorSelector.propTypes = {
  areaId: PropTypes.string.isRequired
}

function mapStateToProps(state, props) {
  return {
    floors: getFloorsForArea(state),
    selectedFloor: props.areaId && state.areas[props.areaId] && state.areas[props.areaId].selectedFloor
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(areaId, floor) {
      dispatch(changeAreaFloor(areaId, floor))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FloorSelector);

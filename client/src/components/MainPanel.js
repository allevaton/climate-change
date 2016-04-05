import React, {Component, PropTypes} from 'react';

import FloorSelector from '../containers/FloorSelector';
import VulnerabilitySection from '../containers/VulnerabilitySection';

export default class MainPanel extends Component {
  render() {
    let {area, onCloseClicked, visible} = this.props;

    return (
      <div
        className="main-panel"
        style={{display: visible ? 'block' : 'none'}}>

        <i
          className="close-button glyphicon glyphicon-remove"
          onClick={onCloseClicked} />

        <div className="header">
          <h1>{area.name || 'Loading...'}</h1>
        </div>

        <div className="container-fluid content">
          <div className="col-sm-5" style={{
              border: '1px solid black'
            }}>
            IMAGE
          </div>

          <div className="col-sm-7">
            <div className="row">
              <div className="col-sm-8">
                <div className="row" style={{color: 'gray'}}>
                  <div className="col-sm-4">
                    <small><b>Sea level</b>: {area.seaLevel} meters</small>
                  </div>
                  <div className="col-sm-4">
                    <small><b>Year Constructed</b>: {area.year}</small>
                  </div>
                </div>

                <div className="row">
                  <br/>
                  <VulnerabilitySection />
                  <br/>
                  {area.description}
                </div>
              </div>

              <div className="col-xs-4">
                <FloorSelector areaId={area.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MainPanel.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCloseClicked: PropTypes.func.isRequired
};

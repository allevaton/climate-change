/* global google */
import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';

import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

class Map extends Component {
  render() {
    return (
      <section style={{height: '100%'}}>
        <GoogleMapLoader
          containerElement={
            <div style={{height: '100%'}} />
          }
          googleMapElement={
            <GoogleMap
              defaultZoom={18}
              onClick={this.props.mapOnClick}
              defaultCenter={{lat: 42.336137, lng: -71.0958872}}
              >
              {Object.keys(this.props.areas).map((areaKey, index) => {
                let area = this.props.areas[areaKey];
                // TODO severity should set the icon here
                return (
                  <Marker
                    key={index}
                    position={{
                      lat: area.lat,
                      lng: area.lng
                    }}
                    icon={{
                      url: `../images/icons/${area.vulnerability}.png`,
                      scaledSize: new google.maps.Size(32, 32),
                      origin: new google.maps.Point(0,0),
                      anchor: new google.maps.Point(18, 18)
                    }}
                    title={area.name}
                    onClick={() => this.props.markerClick(area)}
                  />
                );
              })}
            </GoogleMap>
          }
        />
      </section>
    );
  }
}

Map.propTypes = {
  markerClick: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    areas: state.index.areas
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);

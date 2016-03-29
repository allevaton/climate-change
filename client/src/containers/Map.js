import {connect} from 'react-redux';
import React, {Component} from 'react';

import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  handleMapClick() {

  }

  markerClick(area) {
    console.log(area);
  }

  render() {
    return (
      <section style={{height: '100%'}}>
        <GoogleMapLoader
          containerElement={
            <div
              {...this.props}
              style={{
                height: '100%'
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              defaultZoom={18}
              defaultCenter={{lat: 42.336137, lng: -71.0958872}}
              onClick={::this.handleMapClick}>
              {Object.keys(this.props.areas).map((areaKey, index) => {
                let area = this.props.areas[areaKey];
                return (
                  <Marker
                    key={index}
                    position={{
                      lat: area.lat,
                      lng: area.lng
                    }}
                    title={area.name}
                    onClick={() => {
                      ::this.markerClick(area)
                    }}
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

function mapStateToProps(state) {
  return {
    areas: state.index.areas
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);

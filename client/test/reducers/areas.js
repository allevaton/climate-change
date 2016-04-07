import expect from 'expect';
import reducer from '../../src/reducers/areas';

let request, result;

describe('area reducer', () => {

  it('should return the default state', () => {
    expect(reducer(undefined, {type: ''})).toEqual({
      selectedArea: ''
    });
  });

  it('should change the selected area', () => {
    request = {
      type: 'CHANGE_AREA',
      areaId: '555HA'
    };
    result = {
      selectedArea: '555HA'
    };
    expect(reducer(undefined, request)).toEqual(result);

    request = {
      type: 'CHANGE_AREA',
      areaId: '610HA'
    };
    result = {
      selectedArea: '610HA'
    };
    expect(reducer(undefined, request)).toEqual(result);
  });

  it('should properly set fetching status', () => {
    request = {
      type: 'REQUEST_AREA',
      areaId: '555HA'
    };
    result = {
      selectedArea: '',
      '555HA': {
        isFetching: true,
        selectedFloor: '',
        data: []
      }
    };
    expect(reducer(undefined, request)).toEqual(result);
  });

  it('should properly set received data', () => {
    request = {
      type: 'RECEIVE_AREA',
      areaId: '555HA',
      data: [{
        name: '555 Huntington'
      }]
    };
    result = {
      selectedArea: '',
      '555HA': {
        isFetching: false,
        selectedFloor: '',
        data: [{
          name: '555 Huntington'
        }]
      }
    };
    expect(reducer(undefined, request)).toEqual(result);
  });

  it('should set a default selected floor', () => {
    request = {
      type: 'RECEIVE_AREA',
      areaId: '555HA',
      data: [{
        name: '555 Huntington',
        'Floor Level': 'Ground'
      }]
    };
    result = {
      selectedArea: '',
      '555HA': {
        isFetching: false,
        selectedFloor: 'Ground',
        data: [{
          name: '555 Huntington',
          'Floor Level': 'Ground'
        }]
      }
    };
    expect(reducer(undefined, request)).toEqual(result);
  });

  it('should be able to change the floor', () => {
    let state = {};
    request = {
      type: 'RECEIVE_AREA',
      areaId: '555HA',
      data: [{
        name: '555 Huntington',
        'Floor Level': 'Ground'
      }, {
        name: '555 Huntington',
        'Floor Level': 'First'
      }]
    };
    result = {
      selectedArea: '',
      '555HA': {
        isFetching: false,
        selectedFloor: 'Ground',
        data: [{
          name: '555 Huntington',
          'Floor Level': 'Ground'
        }, {
          name: '555 Huntington',
          'Floor Level': 'First'
        }]
      }
    };
    expect(state = reducer(undefined, request)).toEqual(result);

    request = {
      type: 'CHANGE_AREA_FLOOR',
      areaId: '555HA',
      floor: 'First'
    };
    result = {
      selectedArea: '',
      '555HA': {
        isFetching: false,
        selectedFloor: 'First',
        data: [{
          name: '555 Huntington',
          'Floor Level': 'Ground'
        }, {
          name: '555 Huntington',
          'Floor Level': 'First'
        }]
      }
    };
    expect(state = reducer(state, request)).toEqual(result);
  })
});

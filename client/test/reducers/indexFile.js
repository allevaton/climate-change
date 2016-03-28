import expect from 'expect';
import reducer from '../../src/reducers/indexFile';

describe('index reducer', () => {
  it('should return the default state', () => {
    expect(reducer(undefined, {type: ''})).toEqual({
      isFetching: false,
      invalidated: false,
      areas: {}
    });
  });

  it('should change fetch status', () => {
    expect(reducer(undefined, {type: 'REQUEST_INDEXFILE'})).toEqual({
      isFetching: true,
      invalidated: false,
      areas: {}
    });
  });

  it('should be able to invalidate', () => {
    expect(reducer(undefined, {type: 'INVALIDATE_INDEXFILE'})).toEqual({
      isFetching: false,
      invalidated: true,
      areas: {}
    });
  });

  it('should set areas properly when receiving data', () => {
    let req = {
      type: 'RECEIVE_INDEXFILE',
      receivedAt: 'now',
      data: [
        {ID: '25', Name: 'Huntington'},
        {ID: 'HHA', Name: 'Huntington Avenue'}
      ]
    };

    let expected = {
      isFetching: false,
      invalidated: false,
      lastUpdated: 'now',
      areas: {
        '25': {
          name: 'Huntington',
          floors: undefined,
          type: undefined,
          lat: undefined,
          lng: undefined
        },

        'HHA': {
          name: 'Huntington Avenue',
          floors: undefined,
          type: undefined,
          lat: undefined,
          lng: undefined
        }
      }
    }
    expect(reducer(undefined, req)).toEqual(expected);
  });
});

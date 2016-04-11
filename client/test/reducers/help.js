import expect from 'expect';
import reducer from '../../src/reducers/help';

let request, result;

describe('help reducer', () => {
  it('should return the default state', () => {
    expect(reducer(undefined, {type: ''})).toEqual({
      isFetching: false,
      data: {},
      modal: {
        open: false,
        type: ''
      }
    });
  });

  it('should request help', () => {
    expect(reducer(undefined, {type: 'REQUEST_HELP'})).toEqual({
      isFetching: true,
      data: {},
      modal: {
        open: false,
        type: ''
      }
    })
  });

  it('should receive help', () => {
    request = {
      type: 'RECEIVE_HELP',
      data: [
        {ID: 1, Type: 'Storm Surge', Description: 'Hello there!'}
      ]
    };
    result = {
      isFetching: false,
      data: {
        'Storm Surge': 'Hello there!'
      },
      modal: {
        open: false,
        type: ''
      }
    }
    expect(reducer(undefined, request)).toEqual(result)
  });

  it('should show the help modal', () => {
    request = {
      type: 'SHOW_HELP'
    };
    result = {
      isFetching: false,
      data: {},
      modal: {
        open: true,
        type: ''
      }
    }
    expect(reducer(undefined, request)).toEqual(result)
  });

  it('should hide the help modal', () => {
    request = {
      type: 'HIDE_HELP'
    };
    result = {
      isFetching: false,
      data: {},
      modal: {
        open: false,
        type: ''
      }
    }
    expect(reducer(undefined, request)).toEqual(result)
  });

  it('should switch help types', () => {
    request = {
      type: 'CHANGE_HELP',
      vulnerability: 'Test'
    };
    result = {
      isFetching: false,
      data: {},
      modal: {
        open: false,
        type: 'Test'
      }
    }
    expect(reducer(undefined, request)).toEqual(result)
  })
});

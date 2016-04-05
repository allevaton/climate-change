/*

import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.visibilityFilter
const getTodos = (state) => state.todos

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }
)
*/
import {createSelector} from 'reselect'

const getFloors = (state) => {
  if (state) {
    return state.areas[state.areas.selectedArea]
  } else {
    return [];
  }
}

const getSelectedFloor = (state) => {
  if (state && state.areas[state.areas.selectedArea]) {
    return state.areas[state.areas.selectedArea].selectedFloor
  }
  else {
    return '';
  }
}

const getAreaData = (state) => {
  if (state && state.areas[state.areas.selectedArea]) {
    return state.areas[state.areas.selectedArea].data
  }
  else {
    return [];
  }
}

export const getFloorsForArea = createSelector(
  [getFloors],
  (area) => {
    if (area && area.data && area.data.length > 0) {
      return [...new Set(area.data.map(e => {
          return e['Floor Level'];
        }))]
    } else {
      return [];
    }
  }
)

export const getRoomsForFloor = createSelector(
  [getAreaData, getSelectedFloor],
  (floors, selectedFloor) => {
    if (floors.length > 0 && selectedFloor) {
      return floors.filter(f => f['Floor Level'] === selectedFloor)
    }
    else {
      return [];
    }
  }
)

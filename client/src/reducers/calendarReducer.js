import {
  SELECT_DATE,
  SELECT_EVENT,
  OPEN_PANEL,
  CLOSE_PANEL,
  CHANGE_MODE
} from '../actions/actionTypes';

const initialState = {
  selectedEvent: {},
  selectedDate: '',
  panelOpened: false,
  mode: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DATE:
      return {
        ...state,
        selectedDate: action.payload
      };
    case SELECT_EVENT:
      return {
        ...state,
        selectedEvent: action.payload
      };
    case OPEN_PANEL:
      return {
        ...state,
        panelOpened: true
      };
    case CLOSE_PANEL:
      return {
        ...state,
        selectedDate: '',
        selectedEvent: '',
        panelOpened: false,
        mode: ''
      };
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

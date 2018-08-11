import {
  SEND_MAIL_REQUEST,
  SEND_MAIL_SUCCESS,
  SEND_MAIL_FAILED
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  message: '',
  errMessage: ''
}

export default function contactReducer(state=initialState, action) {
  switch(action.type) {
    case SEND_MAIL_REQUEST:
      return {
        ...state,
        loading: true,
        message: '',
        errMessage: ''
      };
      case SEND_MAIL_SUCCESS:
        return {
          ...state,
          loading: false,
          message: action.payload.message,
          errMessage: ''
        };
      case SEND_MAIL_FAILED:
        return {
          ...state,
          loading: false,
          message: '',
          errMessage: action.payload
        };
      default:
      return state
  }
}

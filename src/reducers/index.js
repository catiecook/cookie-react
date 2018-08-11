import { combineReducers } from 'redux';
import contact from './contactReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  contact,
  form: reduxFormReducer
});

export default rootReducer;

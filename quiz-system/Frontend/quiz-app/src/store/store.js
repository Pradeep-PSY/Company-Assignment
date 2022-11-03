import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducer/authReducer';
import { questionReducer } from '../reducer/questionReducer';

const rootReducer = combineReducers({ auth: authReducer, question: questionReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

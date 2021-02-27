import {persentReducer} from '../redux/persent/persentReducer'
import {numberReducer} from './number/numberReducer'

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
     persent: persentReducer,
     numberKey: numberReducer
})

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware()
  
));
  



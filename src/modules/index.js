import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import portfolio from './portfolio'
import ui from './ui'

export default combineReducers({
  routing: routerReducer,
  counter,
  portfolio,
  ui
})

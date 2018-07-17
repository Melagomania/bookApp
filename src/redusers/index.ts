import { combineReducers } from 'redux'
import allBooks from './allBooksReducer'
import myBooks from './myBooksRedurer'

export default combineReducers({
  allBooks,
  myBooks
})
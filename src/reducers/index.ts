import { combineReducers } from 'redux';
import IBookList from '../interfaces/IBookList';
import IState from '../interfaces/IState';
import booksReducer from './booksReducer';
import { selectAllBooks as fromAllBooks } from './booksReducer';
import { selectMyBooks as fromMyBooks } from './booksReducer';

export default combineReducers({
  books: booksReducer
});

export function selectAllBooks(state: any): IBookList {
  return fromAllBooks(state);
}
export function selectMyBooks(state: any): IBookList {
  return fromMyBooks(state);
}
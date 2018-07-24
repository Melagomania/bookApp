import { combineReducers } from 'redux';
import IBookList from '../interfaces/IBookList';
import IState from '../interfaces/IState';
import booksReducer from './booksReducer';
import { allBooks } from './booksReducer';
import { myBooks } from './booksReducer';

export default combineReducers({
  books: booksReducer
});

export function getAllBooks(state: any): IBookList {
  return allBooks(state);
}
export function getMyBooks(state: any): IBookList {
  return myBooks(state);
}
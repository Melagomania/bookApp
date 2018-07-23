import IBook from './IBook';

export default interface IBookList {
  [bookId: string]: IBook;
}
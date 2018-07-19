import * as React from "react";
import IBook from '../interfaces/IBook';
import Book from './book';

interface IBookListProps {
  books: IBook[];
  bookBtnText: string;
  onBookBtnClick(id: string): any;
}

class BookList extends React.Component<IBookListProps> {
  constructor(props: IBookListProps) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  public onBtnClick(id: string) {
    this.props.onBookBtnClick(id);
  }

  public render() {
    return (
      <ul className="books-list">
        {this.props.books.map((el: IBook) => {
          return (
            <li
              className="books-list__item"
              key={el.id}>
              <Book
                bookData={el}
                onBtnClick={this.onBtnClick}
                btnText={this.props.bookBtnText}
                id={el.id} />
            </li>
          )
        })}
      </ul>
    );
  }
}

export default BookList;
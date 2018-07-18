import * as React from "react";
import Book from './book';

interface IBookList {
  books: any,
  onBookBtnClick: any
}

class BookList extends React.Component<IBookList> {
  constructor(props: any) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  public onBtnClick(id: string) {
    this.props.onBookBtnClick(id);
  }

  public render() {
    return (
      <ul className="books-list">
        {(this as any).props.books.map((el: any) => {
          return (
            <li
              className="books-list__item"
              key={el.id}>
              <Book
                bookData={el}
                onBtnClick={this.onBtnClick}
                id={el.id} />
            </li>
          )
        })}
      </ul>
    );
  }
}

export default BookList;
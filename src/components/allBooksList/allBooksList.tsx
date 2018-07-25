import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "../../actions/booksActions";
import IBookList from "../../interfaces/IBookList";
import { selectAllBooks } from '../../reducers';
import { selectMyBooks } from '../../reducers';
import BooksList from '../bookList/bookList';


class AllBooksList extends React.Component<any> {
  public render() {
    if (Object.keys(this.props.allBooks).length === 0) {
      return (
        <p>No books!</p>
      )
    } else {
      return (
        <BooksList
          books={this.props.allBooks}
          onBookBtnClick={this.props.actions.addBook}
          bookBtnText={'Add'} />
      );
    }
  }
}

function mapStateToProps(state: any) {
  return {
    allBooks: selectAllBooks(state)
  };
}

function mapDispatchToProps(dispatch: any) {
  return { actions: bindActionCreators(bookActions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBooksList);

import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "../../actions/booksActions";
import IBookList from "../../interfaces/IBookList";
import { selectMyBooks } from '../../reducers';
import BooksList from '../bookList/bookList';


class AllBooksList extends React.Component<any> {
  public render() {
    if (Object.keys(this.props.myBooks).length === 0) {
      return (
        <p>Your list is empty</p>
      )
    } else {
      return (
        <BooksList
          books={this.props.myBooks}
          onBookBtnClick={this.props.actions.removeBook}
          bookBtnText={'Remove'} />
      );
    }
  }
}

function mapStateToProps(state: any) {
  return {
    myBooks: selectMyBooks(state)
  };
}

function mapDispatchToProps(dispatch: any) {
  return { actions: bindActionCreators(bookActions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBooksList);

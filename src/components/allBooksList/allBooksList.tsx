import * as React from 'react';
import { connect } from "react-redux";
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import { bindActionCreators } from "redux";
import * as bookActions from "../../actions/booksActions";
import { selectAllBooks } from '../../reducers';
import BooksList from '../bookList/bookList';
import Guide from '../guide/guide';




class AllBooksList extends React.Component<any> {
  public constructor(props: any) {
    super(props);
    this.renderAllBooks = this.renderAllBooks.bind(this);
  }

  public renderAllBooks() {
    return (
      <div>
        {Object.keys(this.props.allBooks).length ?
          <BooksList
            books={this.props.allBooks}
            onBookBtnClick={this.props.actions.addBook}
            bookBtnText={'Add'} /> :
          <div>
            <p>No books!</p>
          </div>
        }
      </div>
    )
  }

  public render() {
    return (
      <div>
        <NavLink
          exact={true}
          className="inner-nav-link"
          activeClassName="inner-nav-link--active"
          to="/allBooks/guide">
          How to search?
        </NavLink>
        <NavLink
          exact={true}
          className="inner-nav-link"
          activeClassName="inner-nav-link--active"
          to="/allBooks">
          List
        </NavLink>
        <Switch>
          <Route
            exact={true}
            path="/allBooks"
            render={this.renderAllBooks}
          />
          <Route
            exact={true}
            path="/allBooks/guide"
            component={Guide} />
        </Switch>

      </div>

    )
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
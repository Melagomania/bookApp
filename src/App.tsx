import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "./actions/booksActions";
import "./App.css";
import BookList from "./components/bookList";
import SearchField from "./components/searchField";
import IBook from './interfaces/IBook';



interface IAppActions {
  addBook(): any;
  removeBook(): any;
  refreshGlobalList(newList: IBook[]): any;
}

interface IAppProps {
  allBooks: any[];
  myBooks: any[];
  actions: IAppActions;
}

class App extends React.Component<IAppProps> {

  public sendRequest = (searchQuery: string) => {
    const { refreshGlobalList } = this.props.actions;
    const url = "https://www.googleapis.com/books/v1/volumes?maxResults=15&q=" + searchQuery;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        refreshGlobalList(JSON.parse(xhr.response).items);
      }
    };
    xhr.send();
  }

  public render() {
    return (
      <div className="App">
        <header className="header">
          <div className="main-wrapper clearfix">
            <SearchField onFormSubmit={this.sendRequest} />
          </div>
        </header>
        <div className="main-wrapper">
          <BookList
            books={this.props.allBooks}
            onBookBtnClick={this.props.actions.addBook}
            bookBtnText={'Add'} />
          <BookList
            books={this.props.myBooks}
            onBookBtnClick={this.props.actions.removeBook}
            bookBtnText={'Remove'} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    allBooks: state.booksReducer.allBooks,
    myBooks: state.booksReducer.myBooks
  };
}

function mapDispatchToProps(dispatch: any) {
  return { actions: bindActionCreators(bookActions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

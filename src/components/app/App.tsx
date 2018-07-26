import * as React from "react";
import { connect } from "react-redux";
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import { bindActionCreators } from "redux";
import * as bookActions from "../../actions/booksActions";
import IBook from '../../interfaces/IBook';
import AllBooksList from "../allBooksList/allBooksList";
import MyBooksList from "../myBooksList/myBooksList";
import SearchField from "../searchField/searchField";
import "./App.css";

interface IAppProps {
  actions: IAppActions;
}

interface IAppActions {
  addBook(id: string): any;
  removeBook(id: string): any;
  refreshGlobalList(newList: IBook[]): any;
}

class App extends React.Component<IAppProps> {
  public sendRequest = (searchQuery: string) => {
    const { refreshGlobalList } = this.props.actions;
    const url = "https://www.googleapis.com/books/v1/volumes?maxResults=15&q=" + searchQuery;
    fetch(url, { method: 'GET', mode: "cors" })
      .then((response) => {
        response.json()
          .then(json => refreshGlobalList(json.items));
      });
  }

  public render() {
    return (
      <div className="App">
        <header className="header">
          <div className="main-wrapper clearfix">
            <nav className="main-navigation">
              <NavLink className="nav-link" activeClassName="nav-link--active" to="/allBooks">All books</NavLink>
              <NavLink className="nav-link" activeClassName="nav-link--active" to="/myBooks">My books</NavLink>
            </nav>
            <SearchField onFormSubmit={this.sendRequest} />
          </div>
        </header>
        <div className="main-wrapper">
          <Switch>

            <Route
              exact={true}
              path='/myBooks'
              component={MyBooksList} />
            <Route
              exact={true}
              path='/allBooks'
              component={AllBooksList} />
            <Route
              component={AllBooksList} />
          </Switch>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return { actions: bindActionCreators(bookActions, dispatch) };
}

export default connect(
  null,
  mapDispatchToProps
)(App);

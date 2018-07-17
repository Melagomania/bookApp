import * as React from "react";
import { connect } from "react-redux";
import "./App.css";


class App extends React.Component {
  public onBtnClick = () => {
    (this as any).props.dispatch({ type: 'ADD' });
  }
  public render() {
    return (
      <div className="App">{(this as any).props.kekes.myBooks.length}
        <button onClick={this.onBtnClick}>up</button></div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    kekes: state
  }
}

export default connect(mapStateToProps)(App);
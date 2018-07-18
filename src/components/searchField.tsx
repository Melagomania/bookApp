import * as React from "react";
import './searchField.css';


interface ISearchField {
  onFormSubmit: any;
}

class SearchField extends React.Component<ISearchField> {
  public constructor(props: any) {
    super(props);
    (this as any).inputRef = React.createRef();
  }

  public render() {
    return (
      <form
        className="search-form"
        onSubmit={this.onSubmitHandler}>
        <input
          placeholder="Search"
          className="search-form__input"
          type="text"
          ref={(this as any).inputRef} />
        <button
          type="submit"
          className="button search-form__button">Search</button>
      </form>
    );
  }

  private onSubmitHandler = (e: any) => {
    e.preventDefault();
    const query = (this as any).inputRef.current.value;
    this.props.onFormSubmit(query);
  }
}
export default SearchField;

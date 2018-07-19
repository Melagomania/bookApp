import * as React from "react";
import './searchField.css';


interface ISearchFieldProps {
  onFormSubmit(query: string): void;
}

class SearchField extends React.Component<ISearchFieldProps> {
  private inputRef: React.RefObject<HTMLInputElement>;

  public constructor(props: any) {
    super(props);
    this.inputRef = React.createRef();
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
          ref={this.inputRef} />
        <button
          type="submit"
          className="button search-form__button">Search</button>
      </form>
    );
  }

  private onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.inputRef.current) {
      const query = this.inputRef.current.value;
      this.props.onFormSubmit(query);
    }
  }
}
export default SearchField;

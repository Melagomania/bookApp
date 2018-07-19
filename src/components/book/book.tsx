import * as React from "react";
import IBook from '../../interfaces/IBook';
import './book.css';

interface IBookProps {
  bookData: IBook;
  id: string;
  btnText: string;
  onBtnClick(id: string): any;
}

class Book extends React.Component<IBookProps> {
  public constructor(props: any) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  public onBtnClick(e: React.MouseEvent<HTMLButtonElement>) {
    const bookId = e.currentTarget.dataset.id;
    this.props.onBtnClick(bookId as string);

  }
  public render() {
    const { volumeInfo } = this.props.bookData;

    return (
      <article className="book">
        <h3>{volumeInfo.title}</h3>
        <Subtitle subtitle={volumeInfo.subtitle} />
        <Authors authors={volumeInfo.authors} /><br />
        <PubDate publishedDate={volumeInfo.publishedDate} /><br />
        <div className="book__inner-wrapper">
          <Image src={volumeInfo.imageLinks} />
          <Description description={volumeInfo.description} />
        </div>
        <button
          className="button book__button"
          onClick={this.onBtnClick}
          data-id={this.props.id}>{this.props.btnText}</button>
      </article>
    );
  }
}

const Subtitle = (props: any) => {
  return (
    props.subtitle ? (
      <h4 className="book__subtitle">{props.subtitle}</h4>
    ) : null
  );
};

const PubDate = (props: any) => {
  const initialDate = props.publishedDate;
  if (initialDate) {
    if (initialDate.search(/^[0-9]{4}$/) === 0) {
      return <span className="book__date small italic">{initialDate}</span>
    } else if (initialDate.search(/^[0-9]{4}-[0-9]{2}$/) === 0) {
      const dt = new Date(initialDate);
      const options = { month: 'short', year: 'numeric' };
      const result = dt.toLocaleDateString('en-GB', options);
      return <span className="book__date small italic">{result}</span>
    } else {
      const dt = new Date(initialDate);
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      const result = dt.toLocaleDateString('en-GB', options);
      return <span className="book__date small italic">{result}</span>
    }
  } else {
    return null;
  }
};

const Image = (props: any) => {
  return (
    props.src ? (
      <img className="book__img" src={props.src.smallThumbnail} alt="" />
    ) : null
  )
};

const Description = (props: any) => {
  let description = props.description;
  if (description) {
    if (description.length > 200) {
      description = description.slice(0, 200) + '...';
    }
    return (
      <p className="book__description">{description}</p>
    )
  } else {
    return null;
  }
};

const Authors = (props: any) => {
  if (props.authors) {
    return (
      <span className="book__authors small italic">{props.authors.join(', ')}</span>
    )
  } else {
    return null;
  }
};

export default Book;
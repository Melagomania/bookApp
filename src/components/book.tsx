import * as React from "react";
import './book.css';

interface IBook {
  bookData: object,
  onBtnClick: any,
  id: string
}

class Book extends React.Component<IBook> {
  public constructor(props: any) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  public onBtnClick(e: MouseEvent) {
    const bookId = (e as any).target.dataset.id;
    this.props.onBtnClick(bookId);

  }
  public render() {
    const { volumeInfo } = (this as any).props.bookData;

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
          onClick={(this as any).onBtnClick}
          data-id={this.props.id}>kekes</button>
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
  const date = props.publishedDate;
  if (date) {
    if (date.search(/^[0-9]{4}$/) === 0) {
      return <span className="book__date small italic">{date}</span>
    } else if (date.search(/^[0-9]{4}-[0-9]{2}$/) === 0) {
      let dt = new Date(date);
      const options = { month: 'short', year: 'numeric' };
      dt = dt.toLocaleDateString('en-GB', options) as any;
      return <span className="book__date small italic">{dt}</span>
    } else {
      let dt = new Date(date);
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      dt = dt.toLocaleDateString('en-GB', options) as any;
      return <span className="book__date small italic">{dt}</span>
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
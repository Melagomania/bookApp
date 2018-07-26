import * as  React from 'react';
import './bookInfo.css';

interface IBookInfoProps {
  description: string;
  onCloseClick(): void;
}

export default class FullBookInfo extends React.Component<IBookInfoProps> {
  public render() {
    return (
      <div className="full-book-info-wrapper">
        <div className="full-book-info clearfix" >
          <button
            className="full-book-info__close-btn"
            onClick={this.props.onCloseClick}>
            X</button>
          <p className="full-book-info__text">{this.props.description}</p>
        </div>
        <div className="screen-shadow" />
      </div>
    )
  }
}

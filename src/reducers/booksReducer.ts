import * as actionTypes from "../constants/actionTypes";
import IAction from "../interfaces/IAction";
import IBook from "../interfaces/IBook";
import IBookList from "../interfaces/IBookList";
import IState from "../interfaces/IState";

const initialState: IState = {
  allBooks: {},
  myBooks: {}
};

function arrayToMap(array: IBook[]): IBookList {
  const res: IBookList = {};
  for (const i of array) {
    res[i.id] = {
      id: i.id,
      volumeInfo: i.volumeInfo
    }
  }
  return res;
}

export default function booksReducer(state: IState = initialState, action: IAction) {
  switch (action.type) {
    case actionTypes.REFRESH_GLOBAL_LIST: {
      return {
        allBooks: arrayToMap(action.payload.newList as IBook[]),
        myBooks: { ...state.myBooks }
      };
    }
    case actionTypes.ADD_BOOK: {
      const bookId = action.payload.id as string;
      return {
        allBooks: { ...state.allBooks },
        myBooks: {
          ...state.myBooks,
          [bookId]: state.allBooks[bookId]
        }
      };
    }
    case actionTypes.REMOVE_BOOK: {
      const bookId = action.payload.id as string;
      const newList = Object.assign({}, state.myBooks);
      delete newList[bookId];
      return {
        allBooks: { ...state.allBooks },
        myBooks: { ...newList }
      };
    }
    default: {
      return state;
    }
  }
}


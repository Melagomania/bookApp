import * as actionTypes from "../constants/actionTypes";
import IAction from "../interfaces/IAction";
import IState from "../interfaces/IState";

const initialState: IState = {
  allBooks: [],
  myBooks: []
};

export default function booksReducer(state: IState = initialState, action: IAction) {
  switch (action.type) {
    case actionTypes.REFRESH_GLOBAL_LIST: {
      return {
        allBooks: (action as any).payload.newList,
        myBooks: [...state.myBooks]
      };
    }
    case actionTypes.ADD_BOOK: {
      for (const i of state.myBooks) {
        if ((i as any).id === (action as any).payload.id) {
          return state;
        }
      }
      for (const i of state.allBooks) {
        if ((i as any).id === (action as any).payload.id) {
          return {
            allBooks: [...state.allBooks],
            myBooks: [...state.myBooks, i]
          };
        }
      }
      return state;
    }
    case actionTypes.REMOVE_BOOK: {
      for (const i in state.myBooks) {
        if ((state.myBooks[i] as any).id === (action as any).payload.id) {
          const newArr = Array.from(state.myBooks);
          newArr.splice((i as any), 1);
          return {
            allBooks: [...state.allBooks],
            myBooks: [...newArr]
          };
        }
      }
    }
    default: {
      return state;
    }
  }
}
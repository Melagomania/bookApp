import * as types from "../constants/actionTypes";
import IAction from "../interfaces/IAction";

const initialState = {
  allBooks: [],
  myBooks: []
};

export default function books(state = initialState, action: IAction) {
  switch (action.type) {
    case types.ADD_BOOK: {
      console.log(action.type, state);
      return {
        allBooks: [],
        myBooks: [...state.myBooks, {}]
      };
    }
    case types.REMOVE_BOOK: {
      console.log(action.type, state);
      const x = [...state.myBooks];
      x.pop();
      return {
        allBooks: [],
        myBooks: x
      };
    }
    case types.REFRESH_GLOBAL_LIST: {
      console.log(action.type, state);
      return state;
    }
    default: {
      return state;
    }
  }
}

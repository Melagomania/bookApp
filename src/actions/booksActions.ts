import * as types from "../constants/actionTypes";
import IAction from "../interfaces/IAction";

export function addBook(id: number): IAction {
  return {
    payload: {
      id
    },
    type: types.ADD_BOOK
  };
}

export function removeBook(id: number): IAction {
  return {
    payload: {
      id
    },
    type: types.REMOVE_BOOK
  };
}

export function refreshGlobalList(newList: object[]): IAction {
  return {
    payload: {
      newList
    },
    type: types.REFRESH_GLOBAL_LIST
  };
}

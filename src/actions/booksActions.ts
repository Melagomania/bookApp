import * as actionTypes from "../constants/actionTypes";
import IAction from "../interfaces/IAction";

export function addBook(id: number): IAction {
  return {
    payload: {
      id
    },
    type: actionTypes.ADD_BOOK
  };
}

export function removeBook(id: number): IAction {
  return {
    payload: {
      id
    },
    type: actionTypes.REMOVE_BOOK
  };
}

export function refreshGlobalList(newList: object[]): IAction {
  return {
    payload: {
      newList
    },
    type: actionTypes.REFRESH_GLOBAL_LIST
  };
}

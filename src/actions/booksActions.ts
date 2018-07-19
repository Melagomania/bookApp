import * as actionTypes from "../constants/actionTypes";
import IAction from "../interfaces/IAction";
import IBook from '../interfaces/IBook';


export function addBook(id: string): IAction {
  return {
    payload: {
      id
    },
    type: actionTypes.ADD_BOOK
  };
}

export function removeBook(id: string): IAction {
  return {
    payload: {
      id
    },
    type: actionTypes.REMOVE_BOOK
  };
}

export function refreshGlobalList(newList: IBook[]): IAction {
  return {
    payload: {
      newList
    },
    type: actionTypes.REFRESH_GLOBAL_LIST
  };
}

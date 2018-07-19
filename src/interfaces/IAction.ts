import IBook from './IBook';

export default interface IAction {
  type: string;
  payload: IPayload;
}

interface IPayload {
  id?: string;
  newList?: IBook[];
}

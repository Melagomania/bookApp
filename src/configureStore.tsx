import { createStore } from "redux";
import reducer from "./reducers";


export default function configureStore(initialState: any) {
  const store = createStore(
    reducer,
    initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
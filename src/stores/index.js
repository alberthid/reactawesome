import { createStore } from "redux";
import rootReducers from '../reducers';

const store = createStore(reducers);

export default store;
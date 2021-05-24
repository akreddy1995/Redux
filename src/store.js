import {createStore} from 'redux'
import CustomerReducer from './store/reducer'


const store = createStore(
    CustomerReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
export default store;
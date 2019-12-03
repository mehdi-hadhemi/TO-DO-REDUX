import {createStore} from 'redux';
import mainreducer from './reduces'

const store =createStore(mainreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const Middlewares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...Middlewares)
export default createStoreWithMiddleware(rootReducer);
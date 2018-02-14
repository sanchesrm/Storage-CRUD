import { combineReducers } from 'redux';
import ProductsReducer from './reducer_products';
import ModalReducer from './reducer_modal';

const rootReducer = combineReducers({
  products: ProductsReducer,
  modalInfo: ModalReducer
});

export default rootReducer;

import authReducer from './authReducer'
import productReducer from './productReducer'
import serviceReducer from './serviceReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  service: serviceReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer


// the key name will be the data property on the state object
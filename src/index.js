import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'
import 'firebase/firestore'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import {fbConfig, rfConfig} from './config/fbConfig'


firebase.initializeApp(fbConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });


const middlewares = [
  thunk.withExtraArgument({getFirebase, getFirestore})
]
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
  )
)



  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={rfConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

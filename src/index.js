import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'
import 'firebase/firestore'
import 'firebase/analytics'
import { createStore, applyMiddleware, compose } from 'redux'
import {rootReducer} from './store'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { ThemeProvider } from '@material-ui/core/styles';
import AuthIsLoaded from './components/auth/AuthIsLoaded';
import {fbConfig, rfConfig} from './config/fbConfig';
import theme from './Theme'


firebase.initializeApp(fbConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();


const middlewares = [
  thunk.withExtraArgument({getFirebase, getFirestore})
]
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    reduxFirestore(firebase)
  )
)



  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={rfConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
          <AuthIsLoaded>
            <ThemeProvider theme={theme}>
              <React.StrictMode>
                <App />
              </React.StrictMode>
            </ThemeProvider>
          </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

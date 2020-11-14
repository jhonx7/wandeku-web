// Replace this with your own config details
const fbConfig = {
  apiKey: "AIzaSyClc-eses4vsNGXisrpmROmFXQF-jbBhhg",
  authDomain: "wandeku.firebaseapp.com",
  databaseURL: "https://wandeku.firebaseio.com",
  projectId: "wandeku",
  storageBucket: "wandeku.appspot.com",
  messagingSenderId: "887080557823",
  appId: "1:887080557823:web:86e71015814565c779c0ca",
  measurementId: "G-DNC9L436FS"
};

const rfConfig = {
  userProfile: 'users', // where profiles are stored in database
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions', // where list of user sessions is stored in database (presence must be enabled)
  useFirestoreForProfile: true,
  attachAuthIsReady: true
}

export {
  fbConfig,
  rfConfig
}
export const signIn = (credentials) => {
  return (dispatch, getState, {
    getFirebase
  }) => {
    const firebase = getFirebase();
    dispatch({
      type: 'SET_LOADING',
      loading: true
    })

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({
        type: 'LOGIN_SUCCESS',
        loading: false
      });
    }).catch((err) => {
      dispatch({
        type: 'LOGIN_ERROR',
        loading: false,
        err
      });
    });

  }
}

export const signOut = () => {
  return (dispatch, getState, {
    getFirebase
  }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({
        type: 'SIGNOUT_SUCCESS'
      })
    });
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {
    getFirebase,
    getFirestore
  }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    dispatch({
      type: 'SET_LOADING',
      loading: true
    })
    
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0],
        address: newUser.address,
        phoneNumber: newUser.phoneNumber,
        role: newUser.role,
      });
    }).then(() => {
      dispatch({
        type: 'SIGNUP_SUCCESS',
        loading: false,
      });
    }).catch((err) => {
      dispatch({
        type: 'SIGNUP_ERROR',
        loading: false,
        err
      });
    });
  }
}
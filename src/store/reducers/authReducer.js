const initState = {
  authError: null, 
  isLoading: false
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      return {
        ...state,
        isLoading: action.loading,
        authError: action.err.message
      }

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: action.loading,
        authError: null
      }

    case 'SIGNOUT_SUCCESS':
      return state;

    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isLoading: action.loading,
        authError: null,
      }

    case 'SIGNUP_ERROR':
      return {
        ...state,
        isLoading: action.loading,
        authError: action.err.message
      }
    case 'DELETE_SUCCESS':
      return {
        ...state,
        authError: null,
      }
    case 'DELETE_ERROR':
      return {
        ...state,
        authError: action.err.message
      }
    case 'AUTH_LOADING':
      return {
        ...state,
        isLoading: action.loading
      }

    default:
      return state
  }
};

export default authReducer;
const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "login_failed":
      console.log("login failed");

      return {
        ...state,
        authError: " login failed"
      };

    case "Login_sucess":
      console.log("login sucess");

      return {
        ...state,
        authError: null
      };

    case "logout":
      console.log("logout success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("Signup success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("Signup failed");

      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;

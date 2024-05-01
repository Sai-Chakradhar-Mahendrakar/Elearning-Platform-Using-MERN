import { writeLocalStorage } from "./action";
import {
  ISUSER_FALSE,
  ISUSER_TRUE,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  SIGNUP_LOADING,
  SINGUP_ERROR,
  SINGUP_SUCCESS,
} from "./actionType";

let init = JSON.parse(localStorage.getItem("user")) || {
  email: "",
  name: "",
  role: "",
  token: "",
  isAuth: "",
  isError: "",
  loading: false,
  success: false,
  isUser: false,
  userId: "",
  place: "",
  age: "",
  message: "",
};

const reducer = (state = init, action) => {
  const { type, payload } = action;
  var newState;
  switch (type) {
    case LOGIN_LOADING:
      newState = {
        ...state,
        isAuth: false,
        token: "",
        isError: "",
        loading: true,
      };
      writeLocalStorage("user", newState);
      return newState;

    case LOGIN_SUCCESS:
      newState = {
        ...state,
        loading: false,
        isAuth: true,
        token: payload.token,
        name: payload.user.name,
        role: payload.user.role,
        email: payload.user.email,
        userId: payload.user._id,
        place: payload.user.city,
        age: payload.user.age,
        job: payload.user.job,
        message: payload?.msg,
        isError: "",
      };
      writeLocalStorage("user", newState);
      return newState;

    case LOGIN_ERROR:
      newState =  {
        ...state,
        loading: false,
        isAuth: false,
        isError: payload,
        token: "",
      };
      writeLocalStorage("user", newState);
      return newState;

    case SIGNUP_LOADING:
      newState =  { ...state, isAuth: false, token: "", isError: "", loading: true };
      writeLocalStorage("user", newState);
      return newState;

    case SINGUP_SUCCESS:
      newState =  { ...state, loading: false, success: true };
      writeLocalStorage("user", newState);
      return newState;

    case SINGUP_ERROR:
      newState =  { ...state, loading: false, isError: payload };
      writeLocalStorage("user", newState);
      return newState;

    case ISUSER_TRUE:
      newState =  { ...state, isUser: true };
      writeLocalStorage("user", newState);
      return newState;
    case ISUSER_FALSE:
      newState =  { ...state, isUser: false };
      writeLocalStorage("user", newState);
      return newState;

    case "USER_LOGOUT":
      newState =  {
        ...state,
        loading: false,
        isAuth: false,
        token: "",
        name: "",
        role: "",
        email: "",
        userId: "",
        message:'',
        age:"",
        job:"",
        place:""
      };
      writeLocalStorage("user", newState);
      return newState;

    default:
      newState =  { ...state };
      writeLocalStorage("user", newState);
      return newState;
  }
};

export { reducer };

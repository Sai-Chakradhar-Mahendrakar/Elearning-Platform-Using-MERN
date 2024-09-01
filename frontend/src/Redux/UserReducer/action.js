import axios from "axios";

import {
  actionLoginError,
  actionLoginLoading,
  actionLoginSuccess,
  actionsignUpLoading,
  actionsingUpError,
  actionsingUpSuccess,
} from "./actionType";

let baseURL = "https://elearning-platform-using-mern-j5py.vercel.app/";

export const loginFetch = (value) => (dispatch) => {
  dispatch(actionLoginLoading());
  return axios
    .post(`${baseURL}users/login`, value)
    .then((res) => {
      dispatch(actionLoginSuccess(res.data));

    })
    .catch((err) => {
      dispatch(actionLoginError(err.message));
      console.log(err);
    });
};

export const signUpFetch = (value) => (dispatch) => {
  dispatch(actionsignUpLoading());
  return axios
    .post(`${baseURL}users/register`, value)
    .then((res) => {
      dispatch(actionsingUpSuccess());
    })
    .catch((err) => {
      dispatch(actionsingUpError(err.response?.data.msg));
      console.log(err);
    });
};

// conver 1 letter to upper case and rest to lower
export function capitalizeFirstLetter(string) {
  const words = string?.split(" ");
  const capitalizedWords = words?.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return capitalizedWords?.join(" ");
}


export function writeLocalStorage(key,data){
    localStorage.setItem(key,JSON.stringify(data))
}
import axios from "axios";

const getDataUsersRequest = () => {
  return { type: "GET_DATA_USERS_REQUEST" };
};

const getDataUsersSuccess = (data) => {
  return { type: "GET_DATA_USERS_SUCCESS", payload: data };
};

const getDataUsersFail = (error) => {
  return { type: "GET_DATA_USERS_FAIL", payload: error };
};

export const getDataUsers = (filter) => {
  return (dispatch) => {
    dispatch(getDataUsersRequest());
    return (
      axios
        // .get(`https://hellojob.up.railway.app/api/v1/users?${filter}`)
        .get(`https://hellojob.up.railway.app/api/v1/users${filter}`)
        .then((result) => {
          dispatch(getDataUsersSuccess(result.data));
        })
        .catch((err) => {
          dispatch(getDataUsersFail(err.response.data));
        })
    );
  };
};

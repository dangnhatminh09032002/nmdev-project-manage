import { all, takeEvery, fork } from "redux-saga/effects";

function* loginRequest() {
  yield takeEvery("LOGIN_REQUEST", function* () {
    yield fetch("http://localhost:3001/auth/google", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

export default function* authSaga() {
  yield all([fork(loginRequest)]);
}

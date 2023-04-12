import { createSlice } from "@reduxjs/toolkit";
import { auth, firebase } from "../../firebase";
import jwtDecode from "jwt-decode";
import { AppDispatch } from "../../app/store";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      auth.signOut();
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, setError, logout } = usersSlice.actions;

export const signIn = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token  = (await userCredential.user.getIdTokenResult()).token;
    console.log("token:::::", token);
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    dispatch(setUser(decoded));
  } catch (error: any) {
    dispatch(setError(error.message))
  }
}

export const signUp = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const token  = (await userCredential.user.getIdTokenResult()).token;
    console.log("token:::::", token);
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    dispatch(setUser(decoded));
  } catch (error: any) {
    dispatch(setError(error.message))
  }
}


export default usersSlice.reducer;

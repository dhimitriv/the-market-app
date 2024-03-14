import { createContext, useContext, useReducer } from "react";

const AuthenticationContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Uknown action");
  }
}

const fakeUser = {
  name: "Dhimitri",
  email: "dhimitrivincani@gmail.com",
  password: "abc123",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthenticationProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === fakeUser.email && password === fakeUser.password)
      dispatch({ type: "login", payload: fakeUser });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthenticationContext.Provider
      value={{ user, isAuthenticated, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

function useAuthentication() {
  const context = useContext(AuthenticationContext);

  if (context === undefined)
    throw new Error(
      "AuthenticationContext was used outside AuthenticationProvider"
    );
  return context;
}

export { AuthenticationProvider, useAuthentication };

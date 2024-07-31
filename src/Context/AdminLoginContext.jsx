import { createContext, useReducer } from "react";

const AdminLoginContext = createContext();
const initialState = false;

const reducer = (state, action) => {
  if (action.type === "isAdminLoggedin") {
    return action.payload;
  }
  return state;
};

const AdminLoginContextProvider = ({ children }) => {
  const [adminLoginState, adminLoginDispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <AdminLoginContext.Provider
      value={{ adminLoginState, adminLoginDispatch }}
    >
      {children}
    </AdminLoginContext.Provider>
  );
};

export { AdminLoginContext, AdminLoginContextProvider };

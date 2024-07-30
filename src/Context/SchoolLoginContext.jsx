import { createContext, useReducer } from "react";

const SchoolLoginContext = createContext();
const initialState = false;

const reducer = (state, action) => {
  if (action.type === "isSchoolLoggedin") {
    return action.payload;
  }
  return state;
};

const SchoolLoginContextProvider = ({ children }) => {
  const [schoolLoginState, schoolLoginDispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <SchoolLoginContext.Provider
      value={{ schoolLoginState, schoolLoginDispatch }}
    >
      {children}
    </SchoolLoginContext.Provider>
  );
};

export { SchoolLoginContext, SchoolLoginContextProvider };

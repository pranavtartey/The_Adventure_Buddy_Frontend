import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Navbar from "./Components/Navbar/Navbar";
import {
  SchoolLoginContext,
  SchoolLoginContextProvider,
} from "./Context/SchoolLoginContext";
import { Suspense, useContext, useEffect } from "react";

const MainContent = () => {
  const { schoolLoginDispatch } = useContext(SchoolLoginContext);

  useEffect(() => {
    const setLoginSession = () => {
      const token = Cookies.get("SchoolAuthorization");
      if (token) {
        schoolLoginDispatch({
          type: "isSchoolLoggedin",
          payload: jwtDecode(token)?.schoolId,
        });
      } else {
        schoolLoginDispatch({ type: "isSchoolLoggedin", payload: false });
      }
    };
    setLoginSession();
  }, [schoolLoginDispatch]);

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

function App() {
  return (
    <>
      <SchoolLoginContextProvider>
        <MainContent />
      </SchoolLoginContextProvider>
    </>
  );
}

export default App;

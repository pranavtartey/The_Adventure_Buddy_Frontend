import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Navbar from "./Components/Navbar/Navbar";
import {
  SchoolLoginContext,
  SchoolLoginContextProvider,
} from "./Context/SchoolLoginContext";
import { Suspense, useContext, useEffect } from "react";
import { AdminLoginContext, AdminLoginContextProvider } from "./Context/AdminLoginContext";

const MainContent = () => {
  const { schoolLoginDispatch } = useContext(SchoolLoginContext);
  const { adminLoginState, adminLoginDispatch } = useContext(AdminLoginContext);

  useEffect(() => {
    const setSchoolLoginSession = () => {
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
    setSchoolLoginSession();

    const setAdminLoginSession = () => {
      const token = Cookies.get("AdminAuthorization");
      if (token) {
        adminLoginDispatch({
          type: "isAdminLoggedin",
          payload: jwtDecode(token)?.userId,
        });
      } else {
        adminLoginDispatch({ type: "isAdminLoggedin", payload: false });
      }
    };
    setAdminLoginSession();
  }, [schoolLoginDispatch, adminLoginDispatch]);

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
      <AdminLoginContextProvider>
        <SchoolLoginContextProvider>
          <MainContent />
        </SchoolLoginContextProvider>
      </AdminLoginContextProvider>
    </>
  );
}

export default App;

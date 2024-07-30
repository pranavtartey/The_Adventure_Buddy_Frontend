import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { SchoolLoginContext } from "../../Context/SchoolLoginContext";
import { useNavigate } from "react-router-dom";

const SchoolAdmin = () => {
  const { schoolLoginState } = useContext(SchoolLoginContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const schoolAuth = Cookies.get("SchoolAuthorization");
    console.log(schoolAuth);
    if (!schoolAuth) {
      navigate("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, []);
  return isAuthenticated ? (
    <>
      <h1>School Admin</h1>
      <p>This is your School Admin page</p>
    </>
  ) : (
    <p>You need to login as school first</p>
  );
};
export default SchoolAdmin;

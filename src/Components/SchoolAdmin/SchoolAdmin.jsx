import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { SchoolLoginContext } from "../../Context/SchoolLoginContext";

const SchoolAdmin = () => {
  const { schoolLoginState } = useContext(SchoolLoginContext);
  const [schoolData, setSchoolData] = useState({});

  useEffect(() => {
    const getSchoolData = async () => {
      const response = await axios.get(
        `http://localhost:8080/the_adventure_buddy/public/get-school`,
        { withCredentials: true }
      );
      setSchoolData(response.data);
    };
    getSchoolData();
  }, []);

  useEffect(() => {
    console.log("School Data is : ", schoolData);
  }, [schoolData]);

  return schoolLoginState ? (
    <>
      <h1>School Admin</h1>
      <b>Your Unique Code : </b> <span>{schoolData._id}</span>
      <br />
      <b>School Name : </b> <span>{schoolData.name}</span>
      <br />
      <b>Registered Email : </b> <span>{schoolData.email}</span>
      <br />
      <b>Upcoming Camps : </b>{" "}
      {schoolData.camps.length ? (
        <span>{schoolData.camps[0].name}</span>
      ) : (
        <span>No camps to show.</span>
      )}
    </>
  ) : (
    <p>You are not authorized to visit this page.</p>
  );
};
export default SchoolAdmin;

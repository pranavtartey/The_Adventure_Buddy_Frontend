import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const CheckDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    schoolName,
    campName,
    campVenue,
    campDate,
    name,
    guardianName,
    section,
    gender,
    age,
    address,
    city,
    state,
    pincode,
    bloodGroup,
    dateOfBirth,
    mobileNumber,
    adhaarNumber,
    schoolId,
    campId,
  } = location.state;
  // if (!fullData) {
  //   return <p>Error: No data provided</p>;
  // }

  const printHandler = () => {
    window.print();
    // navigate("/home");
    //This navigate Statement will not work as expected because the navigate will try to navigate to the path immidiately but the window.print() is a blocking code so it cannot navigate immidiately and will display the error component. To make it work you can either use the maual button to navigate or you can use the setTimeOut() browser web api to delay its navigation.
  };
  //this is manual navigation way.
  const homeHandler = () => {
    navigate("/");
  };
  const saveHandler = async () => {
    await axios.post(
      `http://192.168.2.124:8080/the_adventure_buddy/public/${schoolId}/${campId}/register-student`,
      {
        name,
        guardianName,
        section,
        gender,
        age,
        address,
        class: location.state.class,
        city,
        state,
        pincode,
        bloodGroup,
        dateOfBirth,
        mobileNumber,
        adhaarNumber,
      }
    );
  };
  // console.log(schoolId,campId);
  return (
    <div>
      <h1>Check Details</h1>
      <h2>School Details</h2>
      <p>Name: {schoolName}</p>
      <p>Camp Details: {campName}</p>
      <p>Camp Site/Venue: {campVenue}</p>
      <p>Camp Date: {campDate}</p>

      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Guardian Name: {guardianName}</p>
      <p>Class: {location.state.class}</p>
      <p>Section: {section}</p>
      <p>Gender: {gender}</p>
      <p>Age: {age}</p>
      <p>Blood Group: {bloodGroup}</p>
      <p>Date of birth: {dateOfBirth}</p>
      <p>Mobile Number: {mobileNumber}</p>
      <p>Aadhar Number: {adhaarNumber}</p>
      <p>Address: {address}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Pincode: {pincode}</p>
      <button onClick={printHandler}>Print</button>
      <button onClick={homeHandler}>Home</button>
      <button onClick={saveHandler}>Save</button>
    </div>
  );
};

export default CheckDetails;

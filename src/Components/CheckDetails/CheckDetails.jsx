// import { useLocation } from "react-router-dom";

// const CheckDetails = () => {
//   const location = useLocation();
//   return <div>This is your data :{location.state}</div>;
// };

// export default CheckDetails;

import { useLocation, useNavigate } from "react-router-dom";
const CheckDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fullData = location.state?.fullData;

  if (!fullData) {
    return <p>Error: No data provided</p>;
  }

  const printHandler = () => {
    window.print();
    // navigate("/home");
    //This navigate Statement will not work as expected because the navigate will try to navigate to the path immidiately but the window.print() is a blocking code so it cannot navigate immidiately and will display the error component. To make it work you can either use the maual button to navigate or you can use the setTimeOut() browser web api to delay its navigation.
  };
  //this is manual navigation way.
  const homeHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Check Details</h1>
      <h2>School Details</h2>
      <p>Name: {fullData.schoolDetails.name}</p>
      <p>Camp Details: {fullData.schoolDetails.camps[0].name}</p>
      <p>Camp Site/Venue: {fullData.schoolDetails.camps[0].venue}</p>
      <p>
        Camp Date: {new Date(fullData.schoolDetails.camps[0].date).getDate()}/
        {new Date(fullData.schoolDetails.camps[0].date).getMonth() + 1}/
        {new Date(fullData.schoolDetails.camps[0].date).getFullYear()}
      </p>

      <h2>Student Details</h2>
      <p>Name: {fullData.studentDetails.name}</p>
      <p>Guardian Name: {fullData.studentDetails.guardianName}</p>
      <p>Class: {fullData.studentDetails.class}</p>
      <p>Section: {fullData.studentDetails.section}</p>
      <p>Gender: {fullData.studentDetails.gender}</p>
      <p>Age: {fullData.studentDetails.age}</p>
      <p>Address: {fullData.studentDetails.address}</p>
      <p>City: {fullData.studentDetails.city}</p>
      <p>State: {fullData.studentDetails.state}</p>
      <p>Pincode: {fullData.studentDetails.pincode}</p>
      <button onClick={printHandler}>Print</button>
      <button onClick={homeHandler}>Home</button>
    </div>
  );
};

export default CheckDetails;

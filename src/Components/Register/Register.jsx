import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
    guardianName: "",
    class: "",
    section: "",
    gender: "",
    age: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    bloodGroup: "",
    dateOfBirth: "",
    mobileNumber: "",
    adhaarNumber: "",
    uniqueCode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [schoolData, setSchoolData] = useState(false);

  useEffect(() => {
    console.log(schoolData == false);
  }, []);

  const printHandler = (event) => {
    event.preventDefault();
    window.print();
  };

  const uniqueCodeHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/the_adventure_buddy/public/unique-code`,
        { uniqueCode: inputValue.uniqueCode }
      );
      setSchoolData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const uniqueCodeChangeHandler = (event) => {};

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const fullData = {
      schoolDetails: { ...schoolData },
      studentDetails: { ...inputValue },
    };
    navigate("/check-details", {
      state: { fullData },
    });
    console.log(fullData);
  };

  return (
    <>
      {!schoolData ? (
        <>
          <div>Your School Unique code form</div>
          <form onSubmit={uniqueCodeHandler}>
            <label htmlFor="uniqueCode">School Unique code: </label>
            <br />
            <input
              type="text"
              name="uniqueCode"
              id="uniqueCode"
              value={inputValue.uniqueCode}
              onChange={handleChange}
            />
            <br />
            <button>Submit</button>
          </form>
        </>
      ) : (
        <>
          <div>
            <h1>Your School Details...</h1>
            <b>Name: </b>
            <span>{schoolData.name}</span>
            <br />
            <b>Camp Details: </b>
            <span>{schoolData.camps[0].name}</span>
            <br />
            <b>Camp Site/Venue: </b>
            <span>{schoolData.camps[0].venue}</span>
            <br />
            <b>Camp Date: </b>
            <span>
              {new Date(schoolData.camps[0].date).getDate()}/
              {new Date(schoolData.camps[0].date).getMonth() + 1}/
              {new Date(schoolData.camps[0].date).getFullYear()}
            </span>
          </div>
          <h1>Register</h1>
          <form onSubmit={formSubmitHandler}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={inputValue.name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="guardianName">Guardian Name</label>
            <input
              type="text"
              name="guardianName"
              id="guardianName"
              value={inputValue.guardianName}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="class">Class</label>
            <input
              type="text"
              name="class"
              id="class"
              value={inputValue.class}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="section">Section</label>
            <input
              type="text"
              name="section"
              id="section"
              value={inputValue.section}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              name="gender"
              id="gender"
              value={inputValue.gender}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={inputValue.age}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={inputValue.address}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={inputValue.city}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              id="state"
              value={inputValue.state}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="pincode">Pincode</label>
            <input
              type="number"
              name="pincode"
              id="pincode"
              value={inputValue.pincode}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="bloodGroup">Blood Group</label>
            <input
              type="text"
              name="bloodGroup"
              id="bloodGroup"
              value={inputValue.bloodGroup}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="dateOfBirth">Date of birth</label>
            <input
              type="text"
              name="dateOfBirth"
              id="dateOfBirth"
              value={inputValue.dateOfBirth}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="number"
              name="mobileNumber"
              id="mobileNumber"
              value={inputValue.mobileNumber}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="adhaarNumber">Adhaar Number</label>
            <input
              type="text"
              name="adhaarNumber"
              id="adhaarNumber"
              value={inputValue.adhaarNumber}
              onChange={handleChange}
            />
            <br />
            <button>Submit</button>
            <button onClick={printHandler}>Print</button>
          </form>
        </>
      )}
    </>
  );
};

export default Register;

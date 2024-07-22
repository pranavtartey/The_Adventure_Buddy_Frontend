import { useState } from "react";

const Register = () => {
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
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const printHandler = (event) => {
    event.preventDefault();
    window.print();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
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
  );
};

export default Register;

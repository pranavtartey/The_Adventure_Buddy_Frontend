import { useState } from "react";

const SchoolRegisterForm = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    address: "",
    state: "",
    city: "",
    password: "",
    pincode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //   const printHandler = (event) => {
  //     event.preventDefault();
  //     window.print();
  //   };

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
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={inputValue.address}
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
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={inputValue.city}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={inputValue.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={inputValue.password}
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
        <button>Submit</button>
        {/* <button onClick={printHandler}>Print</button> */}
      </form>
    </>
  );
};

export default SchoolRegisterForm;

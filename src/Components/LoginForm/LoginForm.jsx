import { useState } from "react";

const LoginForm = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    
    // console.log(inputValue);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
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
        <button>Submit</button>
      </form>
    </>
  );
};

export default LoginForm;

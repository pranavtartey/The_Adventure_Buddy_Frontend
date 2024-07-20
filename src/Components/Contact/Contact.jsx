import { useState } from "react";

const Contact = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    mobilenumber: "",
    email: "",
    message: "",
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
    console.log(inputValue);
  }

  return (
    <>
      <h1>Get in touch</h1>
      <h4>How can we support you? Just let us know!</h4>
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
        <label htmlFor="mobilenumber">Mobile Number</label>
        <input
          type="number"
          name="mobilenumber"
          id="mobilenumber"
          value={inputValue.mobilenumber}
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
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          id="message"
          value={inputValue.message}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Contact;

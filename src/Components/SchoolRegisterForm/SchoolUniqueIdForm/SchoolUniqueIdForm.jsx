import { useEffect, useState } from "react";

const SchoolUniqueIdFrom = ({ toSet }) => {
  const [inputValue, setInputValue] = useState({
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

  const uniqueCodeHandler = async (event) => {
    event.preventDefault();
    toSet(true);
    try {
      // const response = await axios.post(
      //   `http://localhost:8080/the_adventure_buddy/public/school-unique-id-code`,
      //   { uniqueCode: inputValue.uniqueCode }
      // );
      // if (response.data.isValid) {
      // }
      console.log("Hello from the unique code form");
      // toSet(true);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Unique Code</h1>
      <form onSubmit={uniqueCodeHandler}>
        <label htmlFor="uniqueCode">Form unique code: </label>
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
  );
};

export default SchoolUniqueIdFrom;

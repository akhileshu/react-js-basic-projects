import { useState } from "react";

function Form({getName}) {
  // we need 2 things all filled,name in input filed
  const initialDetails = {
    name: "",
    email: "",
    pwd: "",
  };
  const [userDetails, setUserDetails] = useState(initialDetails);
  

  function handleChange({ target }) {
    setUserDetails({
      ...userDetails,
      [target.name]: target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userDetails.name && userDetails.email && userDetails.pwd) {
        getName(userDetails.name)
    } else {
      alert("all fields are mandatory");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={userDetails.name}
        name="name"
        placeholder="name"
        type="text"
      ></input>
      <input
        onChange={handleChange}
        value={userDetails.email}
        name="email"
        placeholder="email"
        type="text"
      ></input>
      <input
        onChange={handleChange}
        value={userDetails.pwd}
        placeholder="password"
        name="pwd"
        type="password"
      ></input>
      <button type="submit">submit</button>
    </form>
  );
}
export default Form;

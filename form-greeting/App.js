import "./App.css";
import { useEffect, useState } from "react";
import SuccessMsg from "./SuccessMsg";
import Form from "./Form";

function App() {
  const [name, setName] = useState('');

  function getName(userName) {
    setName(userName) 
  }

  return (
    <>
      {name && <SuccessMsg name={name}></SuccessMsg>}
      <Form getName={getName}></Form>
    </>
  );
}

export default App;

import React,{useState} from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./App.css";



function App() {
  const [currentform,setCurrentForm] = useState('login');

  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }

  return (
    <div className="App">
    {
      currentform === "login"?<Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    }
    </div>
  );
}

export default App;


// import logo from "./logo.svg";
import "./App.css";
import AboutUs from "./Component/AboutUs";
//imported from App.css
 // Assuming it's in the src folder
import Navbar from './Component/Navbar';
// import Crousal from "./Component/Crousal";
import TextForm from "./Component/TextForm";
// let name = "Ganesh";
import React, {useState} from 'react';
import Alert from "./Component/Alert";
// import {BrowserRouter,RouterProvider} from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';

function App() {
  // return (
  //   <>
  //   <h1> Say Hello !!!</h1>
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React With Ganesh
  //       </a>
  //     </header>
  //   </div>
  //   </>
  // );

  const[mode,setMode] = useState('light');
  const[currMode,setCurrMode ] = useState('Enable Dark Mode');
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
      setAlert({
      msg : message,
      type: type
      })
       
      setTimeout(() =>{
        setAlert(null);
      },1500)


}
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      setCurrMode('Enable light Mode');
      showAlert("Dark Mode has been Enabled.","primary");
      document.title = "TextUtils : Dark Mode"
    }else{
      setMode('light');
      setCurrMode('Enable Dark Mode');
      document.title = "TextUtils : Light Mode"
      showAlert("Light Mode has been Enabled.","success");
    }
  }

  return (
    <>
      {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </nav> */}
      {/*  <div className='blank'>
         React to sikhna hi hai bhai.!!!
         </div> */}
      {/* <div className="container">
        <h2>Hello {name}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nam,
          similique nulla natus itaque quas sequi nisi eligendi delectus minima
          odio voluptatibus optio consequuntur modi fugiat tenetur autem
          asperiores? Omnis rerum repellat molestiae dolor. Enim a neque ullam
          possimus quas.
        </p> */}
      {/* </div> */}
    <Navbar title="TextUtils" aboutText="Explore Textutils" mode={mode} toggleMode={toggleMode} currMode = {currMode}></Navbar>
    {/* <Crousal></Crousal> */}
    {/* <RouterProvider router={routes}/> */}
     <Alert alert={alert}></Alert>
    <div className="container">
    <TextForm title="Enter The Text to Analyze " heading="Enter Text to Analyze" mode={mode} showAlert={showAlert}  toggleMode={toggleMode} currMode = {currMode}></TextForm>
    <AboutUs></AboutUs>
    </div>
    
    </>
  );
}

export default App;

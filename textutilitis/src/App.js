import React, { useState } from 'react';
import "./App.css";
import AboutUs from "./Component/AboutUs";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";

function App() {
  const [mode, setMode] = useState('light'); // Light or Dark mode
  const [currMode, setCurrMode] = useState('Enable Dark Mode'); // Mode toggle text
  const [alert, setAlert] = useState(null);
  const [activeTab, setActiveTab] = useState('TextUtils'); // Default tab

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setCurrMode('Enable Light Mode');
      showAlert("Dark Mode has been Enabled.", "primary");
      document.title = "TextUtils: Dark Mode";
    } else {
      setMode('light');
      setCurrMode('Enable Dark Mode');
      showAlert("Light Mode has been Enabled.", "success");
      document.title = "TextUtils: Light Mode";
    }
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'TextUtils':
        return <TextForm title="Enter Text to Analyze" heading="Enter Text to Analyze" mode={mode} showAlert={showAlert} />;
      case 'AboutUs':
        return <AboutUs />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="Explore TextUtils"
        onNavigate={setActiveTab}
        mode={mode}
        toggleMode={toggleMode}
        currMode={currMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {renderTab()}
      </div>
    </>
  );
}

export default App;

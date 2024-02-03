import React, { useState } from 'react';
import AlertComponent from './AlertComponent'; // adjust the path based on your project structure

const App = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);

    // Optionally, you can set a timeout to hide the alert after a certain duration
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hides the alert after 3000 milliseconds (adjust as needed)
  };

  return (
    <div>
      <h1>Your App</h1>

      <button className="btn btn-primary" onClick={handleButtonClick}>
        Show Alert
      </button>

      {showAlert && (
        <AlertComponent type="success" message="This is a success message!" />
      )}
    </div>
  );
};

export default App;

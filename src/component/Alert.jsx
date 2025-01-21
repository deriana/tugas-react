import React, { useState } from 'react';

const AlertDeri = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);  
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  const handleClose = () => {
    setShowAlert(false);
  }

  return (
    <div>
      <div className='alert alert-primary clickable-alert' onClick={handleClick}>
        {children}
      </div>

      {showAlert && (
        <div className="alert alert-success alert-dismissible fade show position-fixed w-100 top-0 start-0 m-0">
          <strong>Success!</strong> You clicked the alert!
          <button type="button" className="btn-close" onClick={handleClose}></button>
        </div>
      )}
    </div>
  );
}

export default AlertDeri;

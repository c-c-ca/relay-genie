import React, { useState } from 'react';

const AlertButton = ({ button: Button, alert: Alert, ...props }) => {
  const [activated, setActivated] = useState(false);

  const activateAlert = e => {
    e.preventDefault();
    setActivated(true);
  };

  const deactivateAlert = () => {
    setActivated(false);
  };

  return (
    <>
      <Button onClick={activateAlert} />
      {activated ? <Alert onDismiss={deactivateAlert} /> : null}
    </>
  );
};

export default AlertButton;

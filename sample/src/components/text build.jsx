import React, { useState } from 'react';

function ShowHideText() {
  // Boolean state variable
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Show / Hide Text Example</h2>
      
      {/* Conditional rendering */}
      {isVisible && <p>Hello, World!</p>}
      
      {/* Toggle button */}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
    </div>
  );
}

export default ShowHideText;
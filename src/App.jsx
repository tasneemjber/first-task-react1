import React, { useState } from "react";

export default function App() {

  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const [showDetails, setShowDetails] = useState(false);


  function toggleDetails() {
    if (showDetails === true) {
      setShowDetails(false); 
    } else {
      setShowDetails(true); 
    }
  }

  return (
    <div>
   
      <div>
        <h1>Counter is {counter}</h1>
        <button onClick={increase} className="btn btn-success">
          Increase
        </button>
      </div>

   
      <div>
       
        <button onClick={toggleDetails}>
          {showDetails === true ? "Hide Product" : "Show Product"}
        </button>

        {showDetails === true ? (
          <div>
            <h2>Product Details</h2>
            <p>
              <strong>Name:</strong> iPhone 14
            </p>
            <p>
              <strong>Price:</strong> $1200
            </p>
            <p>
              <strong>Description:</strong> A premium smartphone with advanced features.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

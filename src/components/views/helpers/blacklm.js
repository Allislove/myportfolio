import React from "react";
import './css/blacklm.css'

// Black lives matter helper component
export default function Blacklm() {

  const handleClick = () => {
    window.location.href = "/";
  }
  
  return (
    <div className="blacklm" onClick={handleClick}>
      <div className="blacklm__text text-center">
        <h1 onClick={handleClick}>Black Lives Matter</h1>
      </div>
    </div>
  );
}

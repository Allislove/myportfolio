import React, { useEffect } from "react";
import { useLocation } from "react-router";

const Error404 = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 - Page Not Found";
    const timer = setTimeout(() => {
      return (window.location.href = "/");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center">
      <h1>Error 404</h1>
      <h3>
        {" "}
        Not match for <code> {location.pathname} </code>{" "}
      </h3>
      <p>Page not found</p>
      <div style={{ backgroundColor: 'red', color: 'white' }}>You will be redirected to home ....</div>
    </div>
  );
};

export default Error404;

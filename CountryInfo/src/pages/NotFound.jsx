import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

  return (
    <div className="flex flex-col pt-20 text-center">
       <h1>404</h1>
      <p>Oops! Page not found.</p>
      <div>
        <button className="text-xs bg-gray-700"  onClick={() => navigate("/")}>
        Go Home
      </button>
      </div>
    </div>
  );
};

export default NotFound;

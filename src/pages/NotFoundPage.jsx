import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <h2>404 Oops!</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

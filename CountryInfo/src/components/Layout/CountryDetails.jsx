import React from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const params = useParams();
  console.log(params);

  return <div></div>;
};

export default CountryDetails;

import React from "react";
import { useParams } from "react-router-dom";
export default function useParam() {
  const value = useParams();
  return <div> asdnsd {value.id}</div>;
}

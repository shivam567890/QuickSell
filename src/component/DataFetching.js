import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function DataFetching() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_DATA" });
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "DATA", payload: data });
        // console.log(data);
        // setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  return <></>;
}

export default DataFetching;

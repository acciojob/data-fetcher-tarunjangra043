import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => setError("An error occurred: " + error.message));
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : data ? (
        <div>
          <h1>Data Fetched from API</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default DataFetcher;

import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Search from "./Search";

function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    axios("https://imdb-api.com/en/API/SearchMovie/k_g77w9fwz/")
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);
  const handleSearch = (event) => {};

  return <div className="App"></div>;
}

export default App;

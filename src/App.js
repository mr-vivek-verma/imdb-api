import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Search from "./Search";

function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  let result = [];
  result = allData.filter((data) => {});

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
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
  };
  const styles = {
    display: "inline",
    width: "30%",
    height: 50,
    float: "left",
    padding: 5,
    border: "0.5px solid black",
    marginBottom: 10,
    marginRight: 10,
  };

  return (
    <div className="App">
      <div>
        <label>Search:</label>
        <input type="text" onChange={(event) => handleSearch(event)} />
      </div>
      <div style={{ padding: 10 }}>
        {filteredData.map((value, index) => {
          return (
            <div style={styles} key={value.id}>
              {value.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

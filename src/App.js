import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Search from "./Search";

function App() {
  // const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  // let result = [];
  // result = allData.filter((data) => {});

  useEffect(() => {
    axios
      .get("https://imdb-api.com/en/API/SearchMovie/k_g77w9fwz/inception 2010")
      .then((response) => {
        console.log(response.data.results);
        setFilteredData(response.data.results);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);
  const handleSearch = (event) => {
    let value = event.target.value;
    // console.log("value", value);
    // console.log("============", filteredData);
    if (value) {
      const result =
        filteredData?.length &&
        filteredData.filter((data) => data.title === value);
      // console.log("0000", result);

      setFilteredData(result?.length ? result : filteredData);
    } else {
      setFilteredData(filteredData);
    }
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
        {filteredData &&
          filteredData.map((value, index) => {
            return (
              <div style={styles} key={index}>
                {value.title}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;

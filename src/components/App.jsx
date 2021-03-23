import React, { useState } from "react";
import Main from "./Main";
import Search from "./Search";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Error from "./Error";

export default function App() {
  //Fetch Api
  const [status, setStatus] = useState(false);
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const api = {
    url: "https://api.openweathermap.org/data/2.5/",
    key: process.env.API_KEY
  };

  function showData() {
    fetch(`${api.url}weather?q=${city}&appid=${api.key}&units=metric`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((d) => {
        setData(d);
        setStatus(true);
        console.log(api.key);
      });
  }

  function handleChange(e) {
    const { value } = e.target;
    return setCity(value);
  }
  return (
    <>
      <header>
        <WbSunnyIcon />
        <a href="/">
          <p>WeatherApp</p>
        </a>
      </header>
      {!status ? (
        <Search handleChange={handleChange} showData={showData} />
      ) : data.cod === 200 ? (
        <Main data={data} />
      ) : (
        <Error data={data} />
      )}
      <footer>
        <p>&copy; WeatherApp 2021</p>
      </footer>
    </>
  );
}

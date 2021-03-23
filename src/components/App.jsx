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
    key: "96768611e6d01000c52d472419597184",
  };

  function showData() {
    fetch(`${api.url}weather?q=${city}&appid=${api.key}&units=metric`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((d) => {
        console.log(d);
        setData(d);
        setStatus(true);
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

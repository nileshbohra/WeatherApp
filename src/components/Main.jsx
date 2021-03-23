import { Slide } from "@material-ui/core";
import React from "react";

export default function Main(props) {
  let date = String(new window.Date());
  date = date.slice(3, 15);
  const data = props.data;
  return (
    <>
      <Slide in={true} timeout={2000} direction="up">
        <main>
          <div className="weatherInfo">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weather"
            />
            <h2 className="cityName">
              {data.name}, {data.sys.country}
            </h2>
            <p className="date">{date}</p>
            <h1 className="temp">{data.main.temp}ºC</h1>
            <p className="weather">{data.weather[0].main}</p>
            <div className="weatherData">
              <div className="otherInfo humidity">
                <i class="fas fa-tint"></i>
                <p>{data.main.humidity}%</p>
              </div>
              <div className="otherInfo wind">
                <i class="fas fa-wind"></i>
                <p>{data.wind.speed}m/s</p>
              </div>
            </div>
          </div>
        </main>
      </Slide>
    </>
  );
}

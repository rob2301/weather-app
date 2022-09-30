import { useEffect, useState } from 'react';
const apiKey = process.env.REACT_APP_API_KEY;

interface CurrentWeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grdn_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  coluds: {
    all: number;
  };
  rain: {
    '1h': number;
    '3h': number;
  };
  snow: {
    '1h': number;
    '3h': number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export default function Place() {
  const [data, setData] = useState<CurrentWeatherData>();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=48.10&lon=20.79&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>Város: {data?.name}</div>
      <div>Altuális hőmérséklet: {data?.main.temp} °C</div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
}

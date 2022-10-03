import moment from 'moment';
import 'moment/locale/hu';
import { useEffect, useState } from 'react';

interface PlaceProps {
  lat: any;
  lon: any;
}

export default function Place(props: PlaceProps) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${props.lat}&longitude=${props.lon}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,snow_depth,weathercode,pressure_msl,surface_pressure,windspeed_10m,winddirection_10m,windgusts_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum&current_weather=true&timezone=auto`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>City: {}</div>
      <div>Actual temperature: {data?.current_weather.temperature} °C</div>

      <div>Sunrise: {moment(data?.daily.sunrise[0]).format('LT')}</div>
      <div>Sunset: {moment(data?.daily.sunset[0]).format('LT')}</div>
    </>
  );
}

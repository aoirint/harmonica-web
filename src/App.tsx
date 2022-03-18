import React from 'react';
import './App.css';
import { useGetSensorValueQuery } from './graphql-types';

function App() {
  const {
    data: sensorValueData
  } = useGetSensorValueQuery({
    fetchPolicy: 'cache-and-network',
    pollInterval: 1000 // ms
  })

  const light = sensorValueData?.light?.[0]?.value
  const timestamp = sensorValueData?.light?.[0]?.timestamp
  const humidity = sensorValueData?.humidity?.[0]?.value
  const temperature = sensorValueData?.temperature?.[0]?.value
  const mhz19Co2 = sensorValueData?.mhz19Co2?.[0]?.value

  return (
    <div className="App">
      <p>
        Timestamp: {timestamp}
      </p>
      <p>
        Light: {light ? (light > 150 ? 'On' : 'Off') : ''}
      </p>
      <p>
        Humidity: {humidity ? `${humidity}%` : ''}
      </p>
      <p>
        Temperature: {temperature ? `${temperature}℃` : ''}
      </p>
      <p>
        CO<sub>2</sub>: {mhz19Co2 ? `${mhz19Co2}ppm` : ''}
      </p>
    </div>
  );
}

export default App;

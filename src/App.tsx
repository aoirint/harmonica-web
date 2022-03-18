import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGetSensorValueQuery } from './graphql-types';

function App() {
  const {
    data: sensorValueData
  } = useGetSensorValueQuery({
    fetchPolicy: 'cache-and-network',
    pollInterval: 1000 // ms
  })

  const light = sensorValueData?.light?.[0]?.value ?? 0

  return (
    <div className="App">
      <p>
        Light: {light > 150 ? 'On' : 'Off'}
      </p>
    </div>
  );
}

export default App;

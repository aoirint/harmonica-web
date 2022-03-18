import React from 'react';
import './App.css';
import { useGetSensorValueQuery } from './graphql-types';

import dayjs from 'dayjs';
import dayjsUtc from 'dayjs/plugin/utc';
import dayjsTimeZone from 'dayjs/plugin/timezone';
dayjs.extend(dayjsUtc);
dayjs.extend(dayjsTimeZone);

function App() {
  const [currentTimeString, setCurrentTimeString] = React.useState<string>(dayjs().tz('Asia/Tokyo').format())
  const currentTime = currentTimeString ? dayjs(currentTimeString) : undefined

  const rawImageUrl = process.env.REACT_APP_IMAGE_URL
  const [imageUrl, setImageUrl] = React.useState<string | undefined>(rawImageUrl)

  const {
    data: sensorValueData
  } = useGetSensorValueQuery({
    fetchPolicy: 'no-cache',
    pollInterval: 1000 // ms
  })

  const light = sensorValueData?.light?.[0]?.value
  const timestampString = sensorValueData?.light?.[0]?.timestamp
  const timestamp = timestampString ? dayjs(timestampString).tz('Asia/Tokyo') : undefined
  const humidity = sensorValueData?.humidity?.[0]?.value
  const temperature = sensorValueData?.temperature?.[0]?.value
  const mhz19Co2 = sensorValueData?.mhz19Co2?.[0]?.value

  // 5分以上古いデータの場合、センサーに異常が起きていると考えられるため警告
  const isOldData = timestamp && currentTime ? timestamp?.isBefore(currentTime?.subtract(5, 'minute')) : undefined

  React.useEffect(() => {
    const interval = setInterval(() => {
      const nextCurrentTimeString = dayjs().tz('Asia/Tokyo').format()
      setCurrentTimeString(nextCurrentTimeString)
    }, 500)

    const imageInterval = setInterval(() => {
      const nextImageUrl = rawImageUrl ? (rawImageUrl + '?' + dayjs().unix()) : undefined
      setImageUrl(nextImageUrl)
    }, 30*1000)

    return () => {
      clearInterval(interval)
      clearInterval(imageInterval)
    }
  })

  return (
    <div className="App">
      <div style={{
        display: 'flex',
      }}>
        <div>
          <p>
            {currentTime?.format('M/D HH:mm:ss')}
          </p>
          <p>
            {isOldData ? 'OLD DATA' : ''}
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
        <div style={{
          margin: '1.5rem',
        }}>
          <img src={imageUrl ?? '#'} />
        </div>
      </div>
    </div>
  );
}

export default App;

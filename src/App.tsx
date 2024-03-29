import React from 'react';
import './App.css';
import { useGetSensorValueQuery } from './graphql-types';

import dayjs from 'dayjs';
import dayjsUtc from 'dayjs/plugin/utc';
import dayjsTimeZone from 'dayjs/plugin/timezone';
import { useApolloClient } from '@apollo/client';
import assert from 'assert';
dayjs.extend(dayjsUtc);
dayjs.extend(dayjsTimeZone);

const TokenContext = React.createContext<string | undefined>(undefined);

function TokenInputPage({
  setToken
}: {
  setToken: (token: string | undefined) => void
}) {
  const tokenInputRef = React.createRef<HTMLInputElement>()

  return (
    <div className='TokenInputPage'>
      <p>
        <label>
          Token:
        </label>
        <input type="password" ref={tokenInputRef} />
      </p>
      <button onClick={() => {
        const tokenValue = tokenInputRef.current?.value
        setToken(tokenValue ? tokenValue : undefined)
      }}>
        Set
      </button>
    </div>
  )
}

function AppPage({
  setToken
}: {
  setToken: (token: string | undefined) => void
}) {
  const apolloClient = useApolloClient()

  const [currentTimeString, setCurrentTimeString] = React.useState<string>(dayjs().tz('Asia/Tokyo').format())
  const currentTime = dayjs(currentTimeString)

  const smokePingUrl = process.env.REACT_APP_SMOKEPING_URL
  assert(smokePingUrl !== undefined)

  const smokePingTarget = process.env.REACT_APP_SMOKEPING_TARGET
  assert(smokePingTarget !== undefined)

  const smokePingCgiStart = currentTime.subtract(3, 'hour').format('YYYY-MM-DD HH:mm')
  const smokePingCgiEnd = currentTime.format('YYYY-MM-DD HH:mm')
  const smokePingImageUrl = new URL('/smokeping/smokeping.cgi', smokePingUrl)
  smokePingImageUrl.search = `displaymode=a;start=${smokePingCgiStart};end=${smokePingCgiEnd};target=${smokePingTarget}`

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
  const isOldData = timestamp ? timestamp.isBefore(currentTime.subtract(5, 'minute')) : undefined

  React.useEffect(() => {
    const interval = setInterval(() => {
      const nextCurrentTimeString = dayjs().tz('Asia/Tokyo').format()
      setCurrentTimeString(nextCurrentTimeString)
    }, 500)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div className='AppPage'>
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
          <p style={{
            fontSize: '10pt',
          }}>
            {timestamp?.format('(M/D HH:mm:ss)')}
          </p>
        </div>
        <div style={{
          margin: '1.5rem',
        }}>
          <img src={smokePingImageUrl?.toString() ?? '#'} style={{
            width: '100%',
          }} />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            apolloClient.resetStore();
            setToken(undefined);
          }}
          style={{
            float: 'right',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            border: '1px solid #666666',
          }}
        >
        </div>
      </div>
    </div>
  );
}

function App() {
  const [token, setToken] = React.useState<string | undefined>(localStorage.getItem('token') ?? undefined);

  React.useEffect(() => {
    if (token !== undefined) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  });

  return (
    <TokenContext.Provider value={token}>
      <div className="App">
        {token === undefined ? (
          <TokenInputPage setToken={setToken} />
        ) : (
          <AppPage setToken={setToken} />
        )}
      </div>
    </TokenContext.Provider>
  )
}

export default App;

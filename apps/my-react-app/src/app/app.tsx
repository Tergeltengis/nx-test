// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { useEffect, useState } from 'react';
import NxWelcome from './nx-welcome';
import { ApiResponse, API_URL } from '@nx-test/api-interface';

export function App() {
  const [message, setMessage] = useState<ApiResponse>({
    message: 'LOADING...',
  });
  useEffect(() => {
    (async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMessage(data);
    })();
  }, []);
  return (
    <>
      <h1>{message.message}</h1>
      <NxWelcome title="my-react-app" />
      <div />
    </>
  );
}

export default App;

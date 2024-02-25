import { useEffect } from 'react';
import './App.css';
import Layout from './components/layout';
import { firebaseInit } from './integrations/firebase';
import { authenticateFirebase } from './integrations/storage';
import { useStore } from './store';

function App() {
  const setResumeUrl = useStore((state) => state.setResumeUrl);

  useEffect(() => {
    firebaseInit();
  }, []);

  useEffect(() => {
    authenticateFirebase((downloadUrl) => {
      setResumeUrl(downloadUrl);
    });
  }, []);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;

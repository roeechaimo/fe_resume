import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAuHBSNGO0d9k2WOUlHmblEpBmxUh7vjx0',
  authDomain: 'roe-e-chaimowicz.firebaseapp.com',
  databaseURL: 'https://roe-e-chaimowicz.firebaseio.com',
  projectId: 'roe-e-chaimowicz',
  storageBucket: 'roe-e-chaimowicz.appspot.com',
  messagingSenderId: '680026137025',
  appId: '1:680026137025:web:fda8efef63afdd199b8f40',
};

export const firebaseInit = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Analytics
  getAnalytics(app);
};

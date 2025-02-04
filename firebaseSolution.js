// firebaseBug.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig1 = {
  apiKey: 'YOUR_API_KEY_1',
  // ... other config 1
};

const firebaseConfig2 = {
  apiKey: 'YOUR_API_KEY_2',
  // ... other config 2
};

const app1 = initializeApp(firebaseConfig1);
const analytics1 = getAnalytics(app1);

const app2 = initializeApp(firebaseConfig2); //This will cause problems.
const analytics2 = getAnalytics(app2);

// firebaseSolution.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  // ... other config
};

let app; // Singleton instance

function initializeFirebase() {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }
  return app;
}

const appInstance = initializeFirebase();
const analytics = getAnalytics(appInstance); 

import { initializeApp } from 'firebase/app';
import firebase          from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
  apiKey             : "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain         : "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
  projectId          : "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
  storageBucket      : "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
  messagingSenderId  : "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
  appId              : "xxxxxxxxxxxxxxxxxxxxxxxxxxx"
});



export const auth = app.auth();
export default app;
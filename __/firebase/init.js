if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyDnS1bNWiUkSSq_LUHzZwK_29OSf1yP_Lg",
  "databaseURL": "https://education-crm.firebaseio.com",
  "storageBucket": "education-crm.appspot.com",
  "authDomain": "education-crm.firebaseapp.com",
  "messagingSenderId": "145364263996",
  "projectId": "education-crm"
});
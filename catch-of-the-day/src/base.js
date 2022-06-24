import Rebase from 're-base';
import firebase from 'firebase';

// Created your firebase app
// Firebase configuration, from your project settings
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAOrsbVCy7v6lMkgqSs7bFHeI4udwOqrb0",
    authDomain: "cdavis-catch-of-the-day-01.firebaseapp.com",
    databaseURL: "https://cdavis-catch-of-the-day-01-default-rtdb.firebaseio.com"
});

// And rebase binding
// Create your rebase, pass it your firebase app, and returns the actual database you have
const base = Rebase.createClass(firebaseApp.database());

// Then you export them to use inside your app
// Named export
export { firebaseApp };

// Default export, main thing that gets exported, is the 'base'
export default base;
import Rebase from 're-base';
import firebase from 'firebase';

// Created your firebase app
// Firebase configuration, from your project settings
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAUd3KRoq9t87WqYVAAci9s1WhyXqGuX3M",
    authDomain: "catch-of-day-02.firebaseapp.com",
    databaseURL: "https://catch-of-day-02-default-rtdb.firebaseio.com/"
});

// And rebase binding
// Create your rebase, pass it your firebase app, and returns the actual database you have
const base = Rebase.createClass(firebaseApp.database());

// Then you export them to use inside your app
// Named export
export { firebaseApp };

// Default export, main thing that gets exported, is the 'base'
export default base;
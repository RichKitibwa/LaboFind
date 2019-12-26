import React, { Component } from 'react';

import firebase from 'firebase';
import 'firebase/auth';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/LandingPage.js";
var config = {
  apiKey: "AIzaSyC1-jnG-RsGVarlgkoKc9CxHt8mjRYa9CQ",
  authDomain: "labofind-250009.firebaseapp.com",
  // databaseURL: "YOUR_DATABASE_URL",
  projectId: "labofind-250009",
  storageBucket: "labofind-250009.appspot.com"
}
firebase.initializeApp(config);
class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
     return (
    <div className="App">
      LaboFind <br/>
      Coming Soon
{LandingPage}
    </div>
  );
  }

}

export default App;

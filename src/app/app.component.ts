import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Airbnb';
  constructor(){var config = {
    apiKey: "AIzaSyBD-Nn1MQqP7z_gTzJQa4j48aK7JpZ7Nuo",
    authDomain: "portfolio-136b4.firebaseapp.com",
    databaseURL: "https://portfolio-136b4.firebaseio.com",
    projectId: "portfolio-136b4",
    storageBucket: "portfolio-136b4.appspot.com",
    messagingSenderId: "727622508297"
  };
  firebase.initializeApp(config);
  }

  ngOnInit() {  }
}
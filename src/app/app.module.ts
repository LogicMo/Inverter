import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {
  apiKey: "AIzaSyB5NfOGEeVAY1635wYj6rtSYBuzHl0XNiY",
  authDomain: "what-287ad.firebaseapp.com",
  databaseURL: "https://what-287ad.firebaseio.com",
  projectId: "what-287ad",
  storageBucket: "what-287ad.appspot.com",
  messagingSenderId: "509324741375"
}
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

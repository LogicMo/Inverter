import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';




@Component({
  selector: 'app-root',
  template: `
              <div> {{ (items | async)? | json }} </div>
              <div> {{ (user | async)? | json }} </div>
              <button (click)="login()">Login</button>
              <button (click)="logout()">Logout</button>
            `,
  styleUrls: ['./app.component.css']
})


export class AppComponent {

 
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  constructor(afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.items = db.list('items');
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
     this.afAuth.auth.signOut();
  }
  


  

}

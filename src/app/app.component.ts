import { Component } from '@angular/core';

import { HogLog } from '../interfaces/HogLog'

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  hoglogCollection: AngularFirestoreCollection<HogLog>;
  hoglogs: Observable<HogLog[]>;
  constructor(private firestore: AngularFirestore) {}
    ngOnInit() {
      this.hoglogCollection = this.firestore.collection('HogLogs');
      this.hoglogs = this.hoglogCollection.valueChanges();
    }
}

import { Component, OnInit } from '@angular/core';


import { HogLog } from '../../interfaces/HogLog'

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hoglogCollection: AngularFirestoreCollection<HogLog>;
  hoglogs: Observable<HogLog[]>;
  constructor(private firestore: AngularFirestore) {}
    ngOnInit() {
      this.hoglogCollection = this.firestore.collection('HogLogs');
      this.hoglogs = this.hoglogCollection.valueChanges();
    }

}

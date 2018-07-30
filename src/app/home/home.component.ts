import { Component, OnInit } from '@angular/core';


import { Record } from '../../interfaces/Record'

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recordsCollection: AngularFirestoreCollection<Record>;
  records: Observable<Record[]>;
  constructor(private firestore: AngularFirestore) {}
    ngOnInit() {
      this.recordsCollection = this.firestore.collection('records');
      this.records = this.recordsCollection.valueChanges();
    }

}

import { config } from "./app.config";

import { Record } from "./models/IRecord";

import { Injectable } from "@angular/core";

import {

  AngularFirestoreDocument,

  AngularFirestore,

  AngularFirestoreCollection

} from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  records: AngularFirestoreCollection<Record>;
  constructor(private db: AngularFirestore) {
    this.records = db.collection<Record>(config.records_endpoint);
   }
}

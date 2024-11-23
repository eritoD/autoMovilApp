import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Aut{
  id?:string;
  nombre:string;
  patente:string;
  
}

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private collectionName="cars";
  constructor(private firestore:AngularFirestore) { }

  addCar(aut:Aut): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(id).set({...aut,id})
  }

  getCar():Observable<Aut[]>{
    return this.firestore.collection<Aut>(this.collectionName).valueChanges();
  }


}

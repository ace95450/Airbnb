import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Dom } from '../models/dom.model';

@Injectable({
  providedIn: 'root'
})

export class DomService {

  dom: Dom[] = [];
  domSubject = new Subject<Dom[]>();

  constructor() { }

  emitDom(){
    this.domSubject.next(this.dom);
  }

  saveDom(){
    firebase.database().ref('/dom').set(this.dom);
  }

  getDom() {
    firebase.database().ref('/dom').on('value', (data) => {
      this.dom = data.val() ?  data.val() : [];
      this.emitDom();
    });

  }

  getSingleDom(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/dom/' + id ).once('value').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewDom(newDom: Dom) {
    this.dom.push(newDom);
    this.saveDom();
    this.emitDom();
  }

  removeDom(dom: Dom) {
    const domIndexToRemove = this.dom.findIndex(
      (domEl) => {
        if (domEl === dom) {
          return true;
        }
      }
    );
    this.dom.splice(domIndexToRemove, 1);
    this.saveDom();
    this.emitDom();
  }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('images/' + almostUniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.downloadURL);
          }
        );
      }
    );
  }

}

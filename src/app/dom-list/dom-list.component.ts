import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dom } from '../models/dom.model';
import { Subscription } from 'rxjs';
import { DomService } from '../services/dom.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-dom-list',
  templateUrl: './dom-list.component.html',
  styleUrls: ['./dom-list.component.css']
})
export class DomListComponent implements OnInit {

  dom: Dom[];
  domSubscruption: Subscription;

  constructor(private domService: DomService, private router: Router) { }

  ngOnInit() {
    this.domSubscruption = this.domService.domSubject.subscribe(
      (dom: Dom[]) => {
        this.dom = dom;
      }
    );
    this.domService.getDom();
    this.domService.emitDom();
  }

  onNewDom() {
    this.router.navigate(['/dom', 'new']);
  }

  onDeleteDom(dom: Dom) {
    this.domService.removeDom(dom);
  }

  onViewDom(id: number) {
    this.router.navigate(['/dom', 'view', id]);
  }
  
  ngOnDestroy() {
    this.domSubscruption.unsubscribe();
  }

  removeDom(dom: Dom) {
    if(dom.photo) {
      const storageRef = firebase.storage().refFromURL(dom.photo);
      storageRef.delete().then(
        () => {
          console.log('Photo removed!');
        },
        (error) => {
          console.log('Could not remove photo! : ' + error);
        }
      );
    }
    const domIndexToRemove = this.dom.findIndex(
      (domEl) => {
        if(domEl === dom) {
          return true;
        }
      }
    );
    this.dom.splice(domIndexToRemove, 1);
    this.saveDom();
    this.emitDom();
  }
  saveDom(): any {
    throw new Error("Method not implemented.");
  }
  emitDom(): any {
    throw new Error("Method not implemented.");
  }
}

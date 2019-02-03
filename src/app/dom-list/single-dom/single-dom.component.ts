import { Component, OnInit } from '@angular/core';
import { Dom } from 'src/app/models/dom.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DomService } from 'src/app/services/dom.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-single-dom',
  templateUrl: './single-dom.component.html',
  styleUrls: ['./single-dom.component.css']
})
export class SingleDomComponent implements OnInit {


  dom: Dom;

  constructor(private route: ActivatedRoute,
              private domService: DomService,
              private router: Router){ }

  ngOnInit() {
    this.dom = new Dom('', ''); // Mettre un premien Dom vide pour éviter les erreur lor du chargement
    const id = this.route.snapshot.params['id'];
    this.domService.getSingleDom(+id).then(
      (dom: Dom) => {
        this.dom = dom;
      }
    );
  }

  onBack(){
    this.router.navigate(['/dom']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomService } from 'src/app/services/dom.service';
import { Router } from '@angular/router';
import { Dom } from 'src/app/models/dom.model';

@Component({
  selector: 'app-dom-form',
  templateUrl: './dom-form.component.html',
  styleUrls: ['./dom-form.component.css']
})
export class DomFormComponent implements OnInit {

  domForm : FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder,
              private domService: DomService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.domForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ''
    });
  }

  onSaveDom(){
    const title = this.domForm.get('title').value;
    const author = this.domForm.get('author').value;
    const description = this.domForm.get('description').value;
    const newDom = new Dom(title, author);
    newDom.description = description;
    if(this.fileUrl && this.fileUrl !== ''){
      newDom.photo = this.fileUrl;
    }
    this.domService.createNewDom(newDom);
    this.router.navigate(['/dom']);
  }

  onUploadFile(file: File){
    this.fileIsUploading = true;
    this.domService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    )
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }
}

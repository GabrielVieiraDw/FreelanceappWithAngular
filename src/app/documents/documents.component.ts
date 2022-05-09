import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from './document';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  providers: [ DocumentService ]
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Documents Dashboard"
  
  documents!: Document[];
  mode = "Observable";
  
  constructor(
    private documentService: DocumentService;
  ) { }

  ngOnInit(): void {
    let timer = Observable.timer(0, 5000)
    timer.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments().subscribe();
  }
}

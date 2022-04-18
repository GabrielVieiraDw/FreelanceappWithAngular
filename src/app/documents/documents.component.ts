import { Component, OnInit } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Documents Dashboard"
  
  documents: Document[] = [
    {
      title: "My first Doc",
      description: 'First description',
      file_url: 'https://google.com',
      updated_at: '18/04/2022',
      image_url: 'https://google.com',
    },
    {
      title: "My second Doc",
      description: 'First description',
      file_url: 'https://google.com',
      updated_at: '18/04/2022',
      image_url: 'https://google.com',
    },
    {
      title: "My last Doc",
      description: 'First description',
      file_url: 'https://google.com',
      updated_at: '18/04/2022',
      image_url: 'https://google.com',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

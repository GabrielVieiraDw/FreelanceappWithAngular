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
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My second Doc",
      description: 'Second description',
      file_url: 'https://google.com',
      updated_at: '18/04/2022',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My last Doc",
      description: 'Second description',
      file_url: 'https://google.com',
      updated_at: '18/04/2022',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Document } from './document'

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documentsUrl  = 'http://localhost:3000/freelance_documents.json';

  constructor(
    private http: HttpClient
  ) { }

  getDocuments() {
    return this.http.get<Document>(this.documentsUrl);
  }
}

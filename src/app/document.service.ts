import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()

export class DocumentService {
    constructor(private http: HttpClient) { }

    load(parent: string, section?: string, document?: string): Observable<string> {
        var url: string = `/help/assets/${parent}/`;

        if (section) {
            if (document) {
                url = `${url}${section}/${document}.html`;
            } else {
                url = `${url}${section}/index.html`;
            }
        } else {
            if (document) {
                url = `${url}${document}.html`;
            } else {
                url = `${url}index.html`;
            }
        }

        return this.http.get(url, {
            headers: new HttpHeaders({
                'Content-Type': 'text/html'
            }),
            observe: null,
            params: null,
            reportProgress: null,
            responseType: 'text'
        });
    }
}

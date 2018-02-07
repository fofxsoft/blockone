import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DocumentService } from "../document.service";

@Component({
    selector: 'app-docs',
    templateUrl: './docs.component.html',
    styleUrls: ['./docs.component.scss']
})

export class DocsComponent implements OnInit {
    constructor(private route: ActivatedRoute, private location: Location, private doc: DocumentService) { }

    section: string;
    document: string;
    body: string;

    ngOnInit() {
        this.loadDocument(this.route.snapshot.paramMap.get('section'), this.route.snapshot.paramMap.get('document'), true);
    }

    loadDocument(section?: string, document?: string, init?: boolean) {
        this.section = section;

        if (!this.document) {
            this.document = 'getting-started';
        }

        this.document = document;

        if (!document) {
            this.document = 'index';
        }

        var path: string = '/docs';

        if (this.section) {
            path = `/docs/${this.section}`;

            if (document) {
                path = `/docs/${this.section}/${this.document}`;
            }
        }

        this.doc.load('docs', this.section, this.document).subscribe(data => this.body = data);

        if (!init) {
            this.location.go(path);
        }
    }
}

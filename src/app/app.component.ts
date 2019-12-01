import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'POC PWA';

  initialData: Observable<any>;

  extraData: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.initialData = this.getInitialData();
  }

  getInitialData() {
    return this.http.get(
      'https://baconipsum.com/api/',
      { params: { type: 'meat-and-filler', paras: '2', 'start-with-lorem': '1' } }
    );
  }

  getExtraData() {
    this.extraData = this.http.get(
      'https://baconipsum.com/api/',
      { params: { type: 'meat-and-filler' }}
    );
  }
}

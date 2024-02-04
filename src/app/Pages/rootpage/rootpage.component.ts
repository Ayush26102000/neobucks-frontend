import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-rootpage',
  templateUrl: './rootpage.component.html',
  styleUrls: ['./rootpage.component.css']
})
export class RootpageComponent {
  name: any = '';
  apiUrl = "http://localhost:3000"

  constructor(private router: Router, private http: HttpClient) { }

  navigatetohome() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    var body = this.name;
    const requestBody = { body };
    this.http.post<any>(`${this.apiUrl}/SaveName`, requestBody, { headers })
      .subscribe((data) => {
        if (data.status == 1) {
          this.router.navigate(['/homepage']);
        }
      },
        (error) => {
          console.error(error);
        });
  }
}


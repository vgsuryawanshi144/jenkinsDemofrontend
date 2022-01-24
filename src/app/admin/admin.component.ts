import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  profile = {};
  constructor (
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadOrderData();
  }
  loadOrderData() {
    this.geOrdrers().subscribe(data => this.profile = data);
  }

  geOrdrers() {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/1`);
  }

}

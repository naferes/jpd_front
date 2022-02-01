import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-de-donnes',
  templateUrl: './base-de-donnes.component.html',
  styleUrls: ['./base-de-donnes.component.css']
})
export class BaseDeDonnesComponent implements OnInit {
role:any;
  constructor() { }

  ngOnInit(): void {
    this.role=localStorage.getItem('role')
  }

}

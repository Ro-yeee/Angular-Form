import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  loaded = false;
  
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getStudentsApi().subscribe(res => {
      this.loaded = true;
    });
  }
}

import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnChanges {
  constructor(private dataService: DataService, private router: Router) {}

  private _count!: number;
  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }

  addStudents(data: NgForm) {
    this.dataService.createStudents(data?.form?.value?.studentCount);
    this.count = 0;
    this.router.navigate(['/boys'])
  }

  ngOnChanges(): void {
    console.log(this.count);
  }
}

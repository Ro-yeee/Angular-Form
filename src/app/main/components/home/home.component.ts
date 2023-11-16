import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnChanges, OnInit {
  constructor(private dataService: DataService, private router: Router) {}

  count!: number;
  totalStudents = this.dataService.getStudentCount();

  addStudents(inputForm: NgForm) {
    this.dataService.createStudents(
      inputForm?.form?.value?.studentCount - this.totalStudents
    );
    this.count = 0;
    this.router.navigate(['/boys']);
  }

  ngOnInit(): void {
    this.count = this.dataService.getStudentCount();
  }

  ngOnChanges(): void {
    console.log(this.count);
  }
}

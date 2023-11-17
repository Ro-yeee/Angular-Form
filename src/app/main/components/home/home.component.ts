import { Component, OnInit, OnChanges } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

function isOdd(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value !== null && c.value % 2 !== 0) {
    return { isodd: true };
  }
  return null;
}

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnChanges {
  constructor(
    private dataService: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  public totalStudents!: number;
  inputForm!: FormGroup;

  ngOnChanges(): void {
    this.dataService
      .getStudentCount()
      .subscribe((data) => (this.totalStudents = data));
  }

  ngOnInit(): void {
    this.dataService
      .getStudentCount()
      .subscribe((data) => (this.totalStudents = data));
    this.inputForm = this.fb.group({
      studentCount: [
        this.totalStudents,
        [Validators.required, Validators.min(this.totalStudents), isOdd],
      ],
    });
  }

  addStudents() {
    this.dataService.createStudents(
      this.inputForm?.value?.studentCount - this.totalStudents
    );
    this.router.navigate(['/boys']);
  }

  handleSubmit(): void {
    this.dataService.Submit().subscribe({
      next: () => alert('Data Submitted Successfully'),
      error: (err) => alert('Served Down, Please Try again'),
    });
  }
}

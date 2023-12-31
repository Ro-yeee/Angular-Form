import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './menAndwomen.component.html',
  styleUrls: ['./menAndwomen.component.css'],
})
export class MenAndWomenComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  pageTitle!: string;
  persons: any[] = [];

  ngOnInit(): void {
    this.pageTitle = this.route.snapshot.data['title'];
    this.persons = this.dataService.getStudents(this.pageTitle);
  }

  onBack(): void {
    this.router.navigate(['/home']);
  }

  handleFieldCreation(personId: string) {
    this.persons.forEach((person) => {
      if (person.id === personId) {
        (person.data.get('content') as FormArray).push(
          this.fb.group({ field: '', value: '' })
        );
      }
    });
  }
}

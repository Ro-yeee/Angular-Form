import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  templateUrl: './menAndwomen.component.html',
  styleUrls: ['./menAndwomen.component.css'],
})
export class MenAndWomenComponent implements OnInit {
  constructor(private dataService: DataService,
              private route: ActivatedRoute, 
              private router: Router) {}

  pageTitle!: string;
  persons: any[] = []
  // [
  //   {
  //     id: 1,
  //     fields: [{ one: 'one' }],
  //   },
  //   {
  //     id: 2,
  //     fields: [{ one: 'one' }],
  //   },
  //   {
  //     id: 3,
  //     fields: [{ one: 'one' }],
  //   },
  // ];
  panelOpenState = false;

  ngOnInit(): void {
    this.pageTitle = this.route.snapshot.data['title'];
    this.persons = this.dataService.getStudents(this.pageTitle)
    console.log(this.persons)
  }

  onBack(): void {
    this.router.navigate(['/home']);
  }
}

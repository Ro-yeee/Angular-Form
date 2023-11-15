import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './menAndwomen.component.html',
  styleUrls: ['./menAndwomen.component.css'],
})
export class MenAndWomenComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  pageTitle!: string;
  data: any[] = [];

  ngOnInit(): void {
    this.pageTitle = this.route.snapshot.data['title'];
  }

  onBack(): void {
    this.router.navigate(['/home']);
  }
}

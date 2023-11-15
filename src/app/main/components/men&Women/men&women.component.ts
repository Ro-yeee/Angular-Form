import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './men&women.component.html',
  styleUrls: ['./men&women.component.css'],
})
export class MenAndWomenComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  pageTitle!: string

  ngOnInit(): void {
    this.pageTitle = this.route.snapshot.data['title']
  }
}

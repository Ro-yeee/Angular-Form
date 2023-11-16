import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public boys: any[] = [];
  public girls: any[] = [];

  createStudents(count: number) {
    for (let i = 1; i <= count / 2; i++) {
      this.boys = [...this.boys, { id: i }];
      this.girls = [...this.girls, { id: i }];
    }
  }

  getStudents(type: string): any[] {
    if (type === 'men') return this.boys;
    else return this.girls;
  }

  getStudentCount(): number{
    return this.girls.length + this.boys.length
  }
}

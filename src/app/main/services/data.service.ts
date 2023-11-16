import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public boys: any[] = [];
  public girls: any[] = [];
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  createStudents(count: number) {
    for (let i = 1; i <= count / 2; i++) {
      this.boys = [
        ...this.boys,
        {
          id: i,
          data: this.fb.group({ content: this.fb.array([this.createFields()]) }),
        },
      ];
      this.girls = [
        ...this.girls,
        {
          id: i,
          data: this.fb.group({ content: this.fb.array([this.createFields()]) }),
        },
      ];
    }
  }

  getStudents(type: string): any[] {
    if (type === 'boys') return this.boys;
    else return this.girls;
  }

  getStudentCount(): number {
    return this.girls.length + this.boys.length;
  }

  private createFields(): FormGroup {
    return this.fb.group({ field: '', value: '' });
  }

  // addFiled(personId: number,type: string): void{
  //   if(type ==='boys'){
  //     this.boys.forEach((person) =>
  //     person.id === personId
  //       ? person.data.value.content.push(
  //          { field: '', value: '' }
  //         )
  //       : null
  //   );
  //   }
  //   console.log(this.boys)
  // }


}

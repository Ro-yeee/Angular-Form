import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public boys: any[] = [];
  public girls: any[] = [];
  public form!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  createStudents(count: number) {
    for (let i = 1; i <= count / 2; i++) {
      this.boys = [
        ...this.boys,
        {
          id: uuid(),
          data: this.fb.group({
            content: this.fb.array([this.createFields()]),
          }),
        },
      ];
      this.girls = [
        ...this.girls,
        {
          id: uuid(),
          data: this.fb.group({
            content: this.fb.array([this.createFields()]),
          }),
        },
      ];
    }
  }

  getStudentsApi() {
    return this.http.get('http://localhost:3000/data').pipe(
      tap(data  => this.saveApiData(data)),
      catchError(err => {
        console.log(err);
        return err;
      })
    );
  }

  saveApiData(data: any) {
    this.boys = [
      ...data.boys.map((boy: any) => ({
        id: boy?.id,
        data: this.fb.group({
          content: this.fb.array([
            ...boy?.data.map((item: any) =>
              this.fb.group({
                field: `${item?.field}`,
                value: `${item?.value}`,
              })
            ),
          ]),
        }),
      })),
    ];
    this.girls = [
      ...data.girls.map((girl: any) => ({
        id: girl?.id,
        data: this.fb.group({
          content: this.fb.array([
            ...girl?.data.map((item: any) =>
              this.fb.group({
                field: `${item?.field}`,
                value: `${item?.value}`,
              })
            ),
          ]),
        }),
      })),
    ];
    console.log(this.boys)
    console.log(this.girls)
  }

  getStudents(type: string): any[] {
    if (type === 'boys') return this.boys;
    else return this.girls;
  }

  getStudentCount(): Observable<number> {
    return of (this.girls.length + this.boys.length);
  }

  private createFields(): FormGroup {
    return this.fb.group({ field: '', value: '' });
  }

  Submit(): Observable<any> {
    let allBoys = this.boys.map((boy) => {
      return { id: boy?.id, data: boy?.data.getRawValue().content };
    });
    let allGirls = this.girls.map((girl) => {
      return { id: girl?.id, data: girl?.data.getRawValue().content };
    });
    let finalData = { boys: allBoys, girls: allGirls };

    return this.http.post('http://localhost:3000/data', finalData);
  }
}

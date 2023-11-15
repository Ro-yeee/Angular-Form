import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './components/home/home.component';
import { MenAndWomenComponent } from './components/men&Women/men&women.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'men',
        component: MenAndWomenComponent,
        data: { title: 'men' },
      },
      {
        path: 'women',
        component: MenAndWomenComponent,
        data: { title: 'women' },
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    MenAndWomenComponent,
    NavbarComponent,
    MainComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ],
})
export class MainModule {}

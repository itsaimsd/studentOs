import { Routes } from '@angular/router';
import { StudentList } from './features/students/pages/student-list/student-list';
import { StudentProfile } from './features/students/pages/student-profile/student-profile';

export const routes: Routes = [
  {
    component: StudentList,
    path:"students"
  },
  {
    component:StudentProfile,
    path:"students/:id"
  }
];

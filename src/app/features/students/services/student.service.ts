import { Injectable } from '@angular/core';
import { DUMMY_STUDENT } from './student.dummy';
import { DUMMY_STUDENT_DETAILS } from './student-detail.dummy';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  getStudent() {
    return DUMMY_STUDENT;
  }

  getStudentById(id: string) {
    return DUMMY_STUDENT_DETAILS.find((student) => student.id === id);
  }
}

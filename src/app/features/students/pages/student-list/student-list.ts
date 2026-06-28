import { Component, inject, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../../../shared/models/student.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.scss',
})
export class StudentList implements OnInit {
  students: Student[] = [];
  selectedClass: string = 'all';
  filteredStudents: Student[] = [];

  studentService = inject(StudentService);
  router = inject(Router);

  ngOnInit() {
    this.students = this.studentService.getStudent();
    this.onFilteredClass(this.selectedClass);
  }

  onFilteredClass(className: any) {
    this.selectedClass = className;
    const filteredStudents = this.students.filter((student) => {
      return student.class == className;
    });

    if (className == 'all') {
      return (this.filteredStudents = this.students);
    } else {
      return (this.filteredStudents = filteredStudents);
    }
  }

  onStudentDetails(studentId: string) {
    this.router.navigate(['/students', studentId]);
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { StudentDetails } from '../../../../shared/models/student-detail.model';

@Component({
  selector: 'app-student-profile',
  imports: [],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.scss',
})
export class StudentProfile implements OnInit {
  studentDetails: StudentDetails | null = null;

  route = inject(ActivatedRoute);
  studentService = inject(StudentService);

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.studentDetails = this.studentService.getStudentById(id) ?? null;
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentList } from "./features/students/pages/student-list/student-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'schoolOs';
}

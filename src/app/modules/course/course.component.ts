import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent implements OnInit {
  title: string = 'course';
  courses: any[] = [];
  imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  imgRight: string = '/assets/img/left.png';
  imgLeft: string = '/assets/img/right.png';
  isActive: boolean = true;
  todo: string = '';
  ToDoList: any[] = [];

  currency = {
    title : "Angular",
    price : 10000,
    rating : 4.5,
    students : 5980,
    releaseDate : new Date(2016, 3, 1)
  };

  text: string = `Angular is a platform that makes it easy to build applications with the web. 
  Angular empowers developers to build applications that live on the internet.`;
  onKeyUp(event: any) {
    this.ToDoList.push(this.todo);
    this.todo = '';
  }
  buttonClick(event: any) {
    this.isActive = !this.isActive;
  }
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.addValue();
  }

  addValue() {
    this.courses = this.courseService.getCourse();
  }

  loadData() {
    this.courses = [
      {id : 1, name : 'Angular'},
      {id : 2, name : 'React'},
      {id : 3, name : 'Vue'},
      {id : 4, name : 'Flutter'},
      {id : 5, name : 'Dart'},
      {id : 6, name : 'Java'},
    ];
  }

  loadDataAgain() {
    this.courses = [
      {id : 1, name : 'Angular'},
      {id : 2, name : 'React'},
      {id : 3, name : 'Vue2'},
      {id : 4, name : 'Flutter2'},
      {id : 5, name : 'Dart2'},
      {id : 6, name : 'Java2'},
      {id : 7, name : 'Angular2'},
    ];
  }

  trackByCourse(course: any) {}

}

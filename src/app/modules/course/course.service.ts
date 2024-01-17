import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor() { }

  getCourse(): string[] {
    return ['Angular', 'NodeJS', 'ReactJS']
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor() { }

  getCourse(): any[] {
    return [
      {id : 1, name : 'Angular'},
      {id : 2, name : 'React'},
      {id : 3, name : 'Vue'}
    ]
  }
}

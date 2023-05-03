import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../shared/course';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://localhost:5116/api/'

  httpOptions ={
    headers: new HttpHeaders({
      ContentType: 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { 
  }

  /* C - Create */

  AddCourse(course:Course)
  {
    return this.httpClient.post(this.apiUrl+ `Course/AddCourse`, course);
  }

  /* R - All*/
  GetCourses() {
    return this.httpClient.get(this.apiUrl + `Course/GetAllCourses`);
  }

  /* R - One*/
  GetCourse(courseId:Number) {
    return this.httpClient.get(this.apiUrl + `Course/GetCourse/${courseId}`);
  }

  /* U - Update*/
  UpdateCourse(courseId:Number,course:Course) {
    return this.httpClient.put(this.apiUrl + `Course/UpdateCourse/${courseId}`, course);
  }


  /* D - Delete*/
  DeleteCourse(courseId:Number) {
    return this.httpClient.delete(this.apiUrl + `Course/DeleteCourse/${courseId}`);
  }


}



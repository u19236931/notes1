import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Course } from '../shared/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  
  courses:Course[] = []


  constructor(private dataService: DataService, private router:Router) { }


  ngOnInit(): void {
    this.GetCourses()
  }


  GetCourses()
  {
    this.dataService.GetCourses().subscribe(res => {
        this.courses = res as Course[];
    });
  }

  EditCourse(courseId:Number)
  {
    this.router.navigate(['/course',courseId]);
  }

  DeleteCourse(courseId:Number)
  {
    this.dataService.DeleteCourse(courseId).subscribe((response:any) => {
      if(response.statusCode == 200)
      {
        this.GetCourses();
      }
      else
      {
        alert(response.message)
      }
    })
  }



}

import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/shared/course';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {

  constructor(private data:DataService, private router : Router , private activated:ActivatedRoute) { }

  //Creating the form 
  editCourse: Course = new Course();

  updateModuleForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    duration: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required])
  })

  ngOnInit(): void {

     // GET THE ID FROM THE URL 
    this.activated.params.subscribe(params => { 


     //SEND OFF REQUEST TO DB TO FIND OBJECT DATA 
     this.data.GetCourse(params['id']).subscribe(response => { //SUBSCRIBE TO THE RESPONSE

      //MAP THE RESPONSE TP THE CURRENT EDITCOURSE OBJECT
      this.editCourse = response as Course;

      //MAP THE RESPONSE VALUES TO THE FORM 
      this.updateModuleForm.controls['name'].setValue(this.editCourse.name);
      this.updateModuleForm.controls['duration'].setValue(this.editCourse.duration);
      this.updateModuleForm.controls['description'].setValue(this.editCourse.description);
     })

    })
 }

  editModule()
  {
    let course = new Course();
    course.name = this.updateModuleForm.value.name;
    course.description = this.updateModuleForm.value.description;
    course.duration = this.updateModuleForm.value.duration;

   this.data.UpdateCourse(this.editCourse.courseId,course).subscribe((response:any) => {

    if(response.statusCode == 200)
    {
      this.router.navigate(['/'])
    }
    else
    {
      alert(response.message);
    }
   });

  }

}

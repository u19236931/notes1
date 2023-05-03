import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors} from '@angular/forms';
import { IdNumberValidator } from '../validators/idnumber.validator'
import { Router } from '@angular/router';
import { RouteInfo } from '../models/routeinfo.model';

@Component({
  selector: 'app-detailsform',
  templateUrl: './detailsform.component.html',
  styleUrls: ['./detailsform.component.css']
})
export class DetailsFormComponent implements OnInit {

  detailsForm! : FormGroup;
  isSubmitted : boolean = false; //TODO: use updateOn instead of this var

  constructor(private fbuilder : FormBuilder, private router : Router) {

  }

  ngOnInit(): void {
    this.detailsForm = this.fbuilder.group(
      {
        fullnameControl : ['', this.nonEmptyName],
        idnumberControl : ['', [Validators.required, IdNumberValidator.saIdValidator]],
        otpControl: ['', Validators.required]
      }
    );
  }

  onSubmitUserDetails(submittedForm : FormGroup) {
    this.isSubmitted = true;
    if (!submittedForm.invalid) {
      this.router.navigate([RouteInfo.UPLOADID]);
    }
  }

  //TODO: move this method out of here
  nonEmptyName (control : FormControl) : ValidationErrors|null {
    if (control.value.trim() == "") {
      let resp = {
        'required' : true //TODO: stop overloading this validation error name
      };
      return resp;
    }
    return null;
  }

}

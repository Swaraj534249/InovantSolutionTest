import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TitleStrategy } from '@angular/router';

import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-dashboard.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue !: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  employeeData !: any;
  inovantApi !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private formbulider: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbulider.group({
      fullName: [''],
      email: [''],
      mobile: [''],
      salary: [''],
    })
    this.getAllEmployee();

  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  postEmployeeDetails() {
    this.employeeModelObj.fullName = this.formValue.value.fullName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;

    this.api.postEmployee(this.employeeModelObj)
      .subscribe(res => {
        console.log(res);
        alert('Employee added Successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
      },
        err => {
          alert("Something went wrong")
        })
  }

  getAllEmployee() {
    this.api.getEmployee()
      .subscribe(res => {
        this.employeeData = res;

      })
  }

  deleteEmployee(row : any) {
    this.api.deleteEmployee(row.id)
      .subscribe(res => {
        alert("Employee Deleted")
        this.getAllEmployee();
      })
  }

  onEdit(row : any){
    this.employeeModelObj.id = row.id;
    this.showAdd=false;
    this.showUpdate=true;
    this.formValue.controls["fullName"].setValue(row.fullName);
    this.formValue.controls["email"].setValue(row.email);
    this.formValue.controls["mobile"].setValue(row.mobile);

  }

  updateEmployeeDetails(){
    this.employeeModelObj.fullName = this.formValue.value.fullName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;

    this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
    .subscribe(res => {
      alert("Updated successfully");
      let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
    })
  }


  // getApiResponse() {
  //   this.api.getApiResponse()
  //     .subscribe(res => {
  //       this.inovantApi = res;

  //     })
  // }
}

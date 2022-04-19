import { Component, OnInit } from '@angular/core';
import { StudentcreateService } from './studentcreate.service';

@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.scss'],
})

export class StudentcreateComponent implements OnInit {
    public Student_Data:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        Student_Name: '',
        Student_Age: '',
        Student_Roll_No: '',
    }

    constructor (
        private studentcreateService: StudentcreateService,
    ) { }

    ngOnInit() {
        this.Student_Data.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.studentcreateService.GpCreate(this.Student_Data).subscribe(data => {
            this.Student_Data.Student_Name = ''
 	 	this.Student_Data.Student_Age = ''
 	 	this.Student_Data.Student_Roll_No = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}
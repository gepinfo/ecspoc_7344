import { Component, OnInit } from '@angular/core';
import { StudentgetallService } from './studentgetall.service';

@Component({
  selector: 'app-studentgetall',
  templateUrl: './studentgetall.component.html',
  styleUrls: ['./studentgetall.component.scss'],
})

export class StudentgetallComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Student Name', field: 'Student_Name'  },{ headerName: 'Student Age', field: 'Student_Age'  },{ headerName: 'Student Roll No', field: 'Student_Roll_No'  },];
    public Student_Data:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        Student_Name: '',
        Student_Age: '',
        Student_Roll_No: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private studentgetallService: StudentgetallService,
    ) { }

    ngOnInit() {
        this.Student_Data.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.studentgetallService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}
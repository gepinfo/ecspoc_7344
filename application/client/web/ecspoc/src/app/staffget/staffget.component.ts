import { Component, OnInit } from '@angular/core';
import { StaffgetService } from './staffget.service';

@Component({
  selector: 'app-staffget',
  templateUrl: './staffget.component.html',
  styleUrls: ['./staffget.component.scss'],
})

export class StaffgetComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Staff Name', field: 'staff_name'  },{ headerName: 'Staff Age', field: 'staff_age'  },{ headerName: 'Staff Roll No', field: 'staff_roll_no'  },];
    public staff:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        staff_name: '',
        staff_age: '',
        staff_roll_no: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private staffgetService: StaffgetService,
    ) { }

    ngOnInit() {
        this.staff.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.staffgetService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}
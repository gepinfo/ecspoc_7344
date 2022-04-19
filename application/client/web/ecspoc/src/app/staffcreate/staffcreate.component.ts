import { Component, OnInit } from '@angular/core';
import { StaffcreateService } from './staffcreate.service';

@Component({
  selector: 'app-staffcreate',
  templateUrl: './staffcreate.component.html',
  styleUrls: ['./staffcreate.component.scss'],
})

export class StaffcreateComponent implements OnInit {
    public staff:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        staff_name: '',
        staff_age: '',
        staff_roll_no: '',
    }

    constructor (
        private staffcreateService: StaffcreateService,
    ) { }

    ngOnInit() {
        this.staff.created_by = sessionStorage.getItem('email') || ''; 
    }
}
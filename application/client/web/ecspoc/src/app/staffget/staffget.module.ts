import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffgetComponent } from './staffget.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        NgbPaginationModule,
        RouterModule.forChild([
            { path: '', component: StaffgetComponent },
        ])
    ],
    declarations: [
        StaffgetComponent,
    ]
})
export class StaffgetModule { }
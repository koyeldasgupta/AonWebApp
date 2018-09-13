import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {User} from "../model/user";
import {GroupsService} from "../services/groups.service";
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";



@Component({
    selector: 'group-users',
    templateUrl: './group-users.component.html',
    styleUrls: ['./group-users.component.css']
})
export class GroupUsersComponent implements OnInit {

    course:any;
    id:any;
    dataSource:User[];
    displayedColumns = ['id', 'userName','email','role', 'created_at'];

    constructor(private route:ActivatedRoute,
                private groupService: GroupsService) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
        this.course = params['id'];
          this.groupService.findAllGroupUsers(this.course).subscribe(data => {
            this.dataSource=data;
            console.log(this.dataSource);                  
           }); 
        });
}

}


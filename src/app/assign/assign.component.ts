import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from "../model/user";
import {Group} from "../model/group";
import {DataService} from "../services/data.service";
import {GroupsService} from "../services/groups.service";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
  users:User[];
  groups:Group[];
  selectedValue:any;
  selectedUser:any;
  constructor(private dataService: DataService,
              private groupsService:GroupsService) { }

  ngOnInit() {  
     this.groupsService.findAllGroups().subscribe(data => {
            this.groups=data;
    });
    this.dataService.getAllUsersAsObserable().subscribe(data =>{
            this.users=data;
    });
  }

  updateProfile(){
        this.groupsService.assignUsertoGroup(this.selectedUser,this.selectedValue);
       
    }
}
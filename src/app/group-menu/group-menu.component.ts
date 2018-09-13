import {Component, OnInit} from '@angular/core';
import {Group} from "../model/group";
import {Observable} from "rxjs/Observable";
import {GroupsService} from "../services/groups.service";
import {map} from "rxjs/operators";

@Component({
    selector: 'group-menu',
    templateUrl: './group-menu.component.html',
    styleUrls: ['./group-menu.component.css']
})
export class GroupMenuComponent implements OnInit {
    groupsList:Group[];
    
    constructor(private groupService: GroupsService) {

    }

    ngOnInit() {

        this.groupService.findAllGroups().subscribe(data => {
            this.groupsList=data;
            console.log(this.groupsList);                  
           });
         

    }

}

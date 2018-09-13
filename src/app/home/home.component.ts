import {Component, OnInit} from '@angular/core';
import {Group} from "../model/group";
import {Observable} from "rxjs/Observable";
import {GroupsService} from "../services/groups.service";
import {map} from "rxjs/operators";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private groupService: GroupsService) {

    }

    ngOnInit() {
    }

    isAdmin():boolean {
        if(sessionStorage.getItem("userRole")==="Admin"){
           return false; 
        }
        return true;
    }

}

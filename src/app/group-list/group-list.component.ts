import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Group} from "../model/group";

@Component({
    selector: 'groups-card-list',
    templateUrl: './group-list.component.html',
    styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

    @Input()
    groups: Group[];

    constructor() {
        
            }
   
            ngOnInit() {}
                    
                     

}

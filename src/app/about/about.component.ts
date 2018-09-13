import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from "../model/user";
import {DataService} from "../services/data.service";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  username:string;
  role:string;
  email:string;
  groups:string="";
  id:any;

  constructor(private dataService: DataService) { }

  ngOnInit() {  
     this.dataService. getAllGroupsForUser(2).subscribe(data => {
            this.username=sessionStorage.getItem("username"); ;
            this.role=sessionStorage.getItem("userRole"); 
            this.email=sessionStorage.getItem("email"); 
            this.id=sessionStorage.getItem("id"); 
            data.forEach(element => {
               this.groups=this.groups+element+",";
            });
    });
  }

  updateProfile(){
            var updateObject={userName:this.username};
            this.dataService.updateProfile(this.id,updateObject);
             
}
}
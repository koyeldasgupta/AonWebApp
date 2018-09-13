import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {GroupUsersComponent} from "./group-users/group-users.component";
import {LoginComponent} from "./login/login.component";
import {UserComponent} from "./user/user.component";
import {GroupListComponent} from "./group-list/group-list.component";
import {GroupMenuComponent} from "./group-menu/group-menu.component";
import {AssignComponent} from "./assign/assign.component";
const routes: Routes = [
    {
        path: "login",
        component: LoginComponent

    },
    {
        path: "usersList",
        component: UserComponent

    },
    {
        path: "home",
        component: HomeComponent

    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: 'group/:id',
        component: GroupUsersComponent,
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"allGroups",
        component:GroupMenuComponent
    },
    {
        path:"assign",
        component:AssignComponent
    },
    {
        path:"",
        component:LoginComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

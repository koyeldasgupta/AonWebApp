import {BrowserModule} from '@angular/platform-browser';
import {NgModule , CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {MatTabsModule} from '@angular/material/tabs';
import {GroupListComponent } from './group-list/group-list.component';
import {GroupUsersComponent} from "./group-users/group-users.component";
import {LoginComponent} from "./login/login.component";
import {UserComponent} from "./user/user.component";
import {GroupMenuComponent} from "./group-menu/group-menu.component";
import {
    MatInputModule, MatListModule,MatDialogModule, MatPaginatorModule, MatProgressSpinnerModule, MatSidenavModule, MatSortModule,
    MatTableModule, MatSelectModule, MatFormFieldModule,
    MatToolbarModule
} from "@angular/material";
import {GroupsService} from "./services/groups.service";
import {AuthService} from "./services/auth.service";
import {DataService} from './services/data.service';
import {HttpClientModule} from "@angular/common/http";
import {AddDialogComponent} from './dialogs/add/add.dialog.component';
import {EditDialogComponent} from './dialogs/edit/edit.dialog.component';
import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from "./services/login.service";
import {AssignComponent} from "./assign/assign.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        GroupUsersComponent,
        GroupListComponent,
        LoginComponent,
        AddDialogComponent,
        EditDialogComponent,
        DeleteDialogComponent,
        UserComponent,
        GroupMenuComponent,
        AssignComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule
    ],
    providers: [
        GroupsService,
        AuthService,
        DataService,
        LoginService
    ],
    entryComponents: [
        AddDialogComponent,
        EditDialogComponent,
        DeleteDialogComponent
      ],
    bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {
}

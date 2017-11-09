import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {AuthGuard} from "./auth-guard.service";
import {HomeComponent} from "./home/home.component";
import {NotesComponent} from "./home/notes/notes.component";
import {SalesComponent} from "./home/sales/sales.component";
import {EventsComponent} from "./home/events/events.component";
import {AddEventComponent} from "./home/add-event/add-event.component";
import {AddNotesComponent} from "./home/add-notes/add-notes.component";
import {AddSalesComponent} from "./home/add-sales/add-sales.component";
import {OpenningComponent} from "./home/openning/openning.component";



const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: NavigationBarComponent },
  { path: 'home', canActivate:[AuthGuard], component:HomeComponent , children:[
    { path: 'openning', component: OpenningComponent},
    { path: 'notes', component:NotesComponent  },
    { path: 'sales', component:SalesComponent },
    { path: 'events', component:EventsComponent  },
    { path: 'addEvent', component:AddEventComponent  },
    { path: 'addNotes', component:AddNotesComponent  },
    { path: 'addSales', component:AddSalesComponent  }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

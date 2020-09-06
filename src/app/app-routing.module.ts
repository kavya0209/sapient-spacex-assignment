import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpaceBodyComponent} from './space-body/space-body.component';
import {FiltersComponent} from './filters/filters.component';


const routes: Routes = [
  /* {path : '' , redirectTo:'/departments' , pathMatch : 'full'},  pathmatch can be prefix or full , if pathmatch is prefix which means 
  if the path is prefix to the url then redirect to departments in our case , full says only if the full url is empty then redirect to departments*/
  {path : 'filters' , component:FiltersComponent},
  {path : 'filters/:id' , component:SpaceBodyComponent}
 
  // {path : "**" , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SpaceBodyComponent,FiltersComponent]

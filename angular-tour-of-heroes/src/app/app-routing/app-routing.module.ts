import {NgModule} from '@angular/core';
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {HeroesComponent} from "../heroes/heroes.component";
import {RouterModule, Routes} from "@angular/router";

const routeConfig: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent}
];
// path：路径 redirectTo：重定向
@NgModule({
  imports: [
    RouterModule.forRoot(routeConfig)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}

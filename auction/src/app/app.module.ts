import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import {CarouselComponent} from './carousel/carousel.component';
import {ProductComponent} from './product/product.component';
import {StartsComponent} from './starts/starts.component';
import {TestComponent} from './test/test.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HomeComponent} from './home/home.component';

import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { FilterPipe } from './pipe/filter.pipe';
import {ProductService} from "./shared/product.service";
import {ErrorComponent} from "./error/error.component";
import { ExampleFormComponent } from './example-form/example-form.component';
import {WebSocketService} from "./shared/web-socket.service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: '**', component: ErrorComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StartsComponent,
    TestComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe,
    ErrorComponent,
    ExampleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // 提供双向数据绑定指令
    HttpModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ProductService, WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

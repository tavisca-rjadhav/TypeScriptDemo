import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/productcompopnent/app.product.component';
import { ProductReactiveFormComponent } from './components/productreactiveformcompopnent/app.productreactiveform.component';
import { TableDirectiveComponent } from './directives/table.component.directive';
import { DropDownDirectiveComponent } from './directives/dropdown.component.directive';
import './litelements/app.simpleelement.elements'
import './litelements/app.tableelement.elements'
import { SimpleElementComponent } from './litelementscomponents/app.simpleelements.component';
import { TableElementComponent } from './litelementscomponents/app.tableelements.component';
import { OrderListComponent } from './components/ordercomponent/app.orderlist.component';
import { CustomerListComponent } from './components/customercomponent/app.customerlist.component';
import { SearchComponent } from './components/searchcomponent/app.searchcomponent.component';
import { ProductIdDirective } from './directives/check-unique-productid.directive';
import { ProductIdDirectiveComponent } from './components/directivecomponent/app.directivecomponent.component';
import { HttpService } from './service/app.httpservice.service';
import { HttpClientModule } from '@angular/common/http';
// imports: array that imports all standard Angular moaulds and custom
// extenal modules for the current NG App.

// declatrations: array, used for declaring all components, deirectives
// for the current NG app. All components will be initialized in declartion

// providers: array, this is a DI container to register all NG
// services so that they can be injected in other NG Objects

// bootstrap : array, that contains one or more components to be
// rendered when AppModule is loaded in browser

// entryComponent: for Custom Elements (Depricated in NG 9)

// BrowserModule: The mandatory module for BootStrap NGModule
// Per NG Application we can have 'Only-One' instance of BrowserModule

@NgModule({
  declarations: [
    AppComponent, ProductComponent,
    ProductReactiveFormComponent,
    TableDirectiveComponent,
    DropDownDirectiveComponent,
    SimpleElementComponent,
    TableElementComponent,
    CustomerListComponent,
    OrderListComponent,
    SearchComponent,
    ProductIdDirective,
    ProductIdDirectiveComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA],
  providers: [ HttpService],
  bootstrap: [ProductComponent]
})
export class AppModule { }

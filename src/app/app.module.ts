import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{ BrowserAnimationsModule}from '@angular/platform-browser/animations';//1
import { ToastrModule } from 'ngx-toastr';//1//npm i toastr //us di 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,//2
    ToastrModule.forRoot(),//2
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

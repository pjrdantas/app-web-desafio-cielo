import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';

import { AppRoutingModule } from './app-routing.module';

import { ConfigService } from './services/config.service';
import { ExtratoService } from './services/extrato.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ConfigService, ExtratoService],
  bootstrap: [AppComponent]
})


export class AppModule { }

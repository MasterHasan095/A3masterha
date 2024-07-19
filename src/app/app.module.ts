import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


//My imports
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HeaderMasterhaComponent } from './header-masterha/header-masterha.component';
import { FooterMasterhaComponent } from './footer-masterha/footer-masterha.component';
import { GoldMasterhaComponent } from './gold-masterha/gold-masterha.component';
import { SilverMasterhaComponent } from './silver-masterha/silver-masterha.component';
import { BronzeMasterhaComponent } from './bronze-masterha/bronze-masterha.component';
import { MedalsMasterhaComponent } from './medals-masterha/medals-masterha.component';


//routes
const approutes: Routes = [
  {path: "", component: MedalsMasterhaComponent},
  {path: "gold", component: GoldMasterhaComponent},
  {path: "silver", component: SilverMasterhaComponent},
  {path: "bronze", component: BronzeMasterhaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderMasterhaComponent,
    FooterMasterhaComponent,
    GoldMasterhaComponent,
    SilverMasterhaComponent,
    BronzeMasterhaComponent,
    MedalsMasterhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approutes)

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

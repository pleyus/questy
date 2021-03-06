import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewerComponent } from './viewer/viewer.component';
import { PanelComponent } from './panel/panel.component';
import { HeaderComponent } from './panel/header/header.component';
import { BankComponent } from './bank/bank.component';

const appRoutes: Routes = [
  { path: 'view', component: ViewerComponent },
  {
    path: 'panel',
    component: PanelComponent,
    children: [
      { path: 'bank', component: BankComponent }
    ]
  },
  { path: '', redirectTo: '/panel', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    PanelComponent,
    HeaderComponent,
    BankComponent
  ],
  imports: [
    RouterModule.forRoot( appRoutes ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TosComponent } from './tos/tos.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { NewProductsComponent } from './new-products/new-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    TosComponent,
    ComingSoonComponent,
    NewProductsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'tos', component: TosComponent },
      { path: 'coming-soon', component: ComingSoonComponent },
      { path: 'new-products', component: NewProductsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

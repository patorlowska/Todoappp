import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NavComponentModule } from '@nav';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavComponentModule,
    AngularFireModule.initializeApp(environment.firestoreConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

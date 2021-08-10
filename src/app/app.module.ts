import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { HomeComponent } from './Home/home.component';
import { UserdetailsComponent } from './Userdetails/userdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserdataEffects } from './store/effects/store.effects';
import { userReducer } from './store/reducers/store.reducer';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModules } from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({users:userReducer}),
    HttpClientModule,
    EffectsModule.forRoot([UserdataEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

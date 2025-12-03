import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HomeModule } from './home-component/home.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CounterModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

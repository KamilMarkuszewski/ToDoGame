import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ToDoElementComponent } from './components/to-do-element/to-do-element.component';
import { AchievementsElementComponent } from './components/achievements-element/achievements-element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ToDoListComponent,
    AchievementsComponent,
    ToDoElementComponent,
    AchievementsElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

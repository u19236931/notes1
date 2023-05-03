import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FilechooserComponent } from './filechooser/filechooser.component';
import { InfocardComponent } from './infocard/infocard.component';
import { PrefixStripPipe } from './pipes/prefix-strip.pipe';
import { UploadpicsComponent } from './uploadpics/uploadpics.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsFormComponent } from './detailsform/detailsform.component';

@NgModule({
  declarations: [
    AppComponent,
    FilechooserComponent,
    InfocardComponent,
    PrefixStripPipe,
    UploadpicsComponent,
    DetailsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [BrowserModule, FormsModule, EditorModule, MatIconModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}

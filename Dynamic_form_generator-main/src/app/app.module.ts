// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { JsonEditorComponent } from './json-editor/json-editor.component';
// import { FormGeneratorComponent } from './form-generator/form-generator.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     JsonEditorComponent,
//     FormGeneratorComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';
// import { JsonEditorComponent } from './json-editor/json-editor.component';
// import { FormGeneratorComponent } from './form-generator/form-generator.component';
// // import { MonacoEditorModule } from 'ngx-monaco-editor';

// @NgModule({
//   declarations: [
//     AppComponent,
//     JsonEditorComponent, // Declare this component
//     FormGeneratorComponent // Declare this component
//   ],
//   imports: [
//     BrowserModule,
//     ReactiveFormsModule,
//     // MonacoEditorModule.forRoot()  Configure Monaco Editor
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }




import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

import { AppComponent } from './app.component';
import { JsonEditorComponent } from './json-editor/json-editor.component';

@NgModule({
  declarations: [AppComponent, JsonEditorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule.forRoot() // Ensure this is included
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}



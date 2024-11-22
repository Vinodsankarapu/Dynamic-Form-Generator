// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-json-editor',
//   templateUrl: './json-editor.component.html',
//   styleUrls: ['./json-editor.component.css']
// })
// export class JsonEditorComponent {

// }



// import { Component, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-json-editor',
//   templateUrl: './json-editor.component.html',
//   styleUrls: ['./json-editor.component.css']
// })
// export class JsonEditorComponent {
//   @Output() schemaChange = new EventEmitter<string>();

//   schema: string = JSON.stringify({
//     title: "Sample Form",
//     fields: [
//       { label: "Name", type: "text", placeholder: "Enter your name", required: true },
//       { label: "Email", type: "email", placeholder: "Enter your email", required: true },
//       { label: "Age", type: "number", placeholder: "Enter your age" }
//     ]
//   }, null, 2);

//   editorOptions = { theme: 'vs-dark', language: 'json' };

//   updateSchema(newSchema: string) {
//     this.schemaChange.emit(newSchema);
//   }
// }




import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.css']
})
export class JsonEditorComponent {
  schema: string = '{\n  "key": "value"\n}';
  editorOptions = { theme: 'vs-dark', language: 'json' };

  @Output() schemaChange = new EventEmitter<string>();

  updateSchema(event: any): void {
    const editorContent = event.target ? event.target.value : event;
    this.schema = editorContent;
    this.schemaChange.emit(this.schema); // Emit updated schema to parent
  }
}



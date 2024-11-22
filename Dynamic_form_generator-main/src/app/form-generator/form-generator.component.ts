// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-form-generator',
//   templateUrl: './form-generator.component.html',
//   styleUrls: ['./form-generator.component.css']
// })
// export class FormGeneratorComponent {

// }



import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnChanges {
  @Input() schema: string = '';
  form: FormGroup | null = null;
  formFields: any[] = [];
  formTitle: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['schema'] && this.schema) {
      try {
        const parsedSchema = JSON.parse(this.schema);
        this.formTitle = parsedSchema.title || 'Generated Form';
        this.formFields = parsedSchema.fields || [];
        this.createForm();
      } catch (error) {
        console.error('Invalid JSON Schema:', error);
      }
    }
  }

  private createForm() {
    const formGroup: any = {};
    this.formFields.forEach((field: any) => {
      if (field.type === 'checkbox') {
        field.options.forEach((option: string) => {
          formGroup[option] = [false];
        });
      } else {
        formGroup[field.label] = [field.value || '', field.required ? Validators.required : null];
      }
    });
    this.form = this.fb.group(formGroup);
  }
}


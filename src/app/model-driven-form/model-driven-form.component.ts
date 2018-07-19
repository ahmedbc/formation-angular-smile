import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'imdb-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent {
    form: FormGroup;

    constructor(fb: FormBuilder) {
      const required = ['', Validators.required];
        this.form = fb.group({
            firstName: required,
            password: required
        });

    }
    onSubmit() {
        console.log(this.form);
    }
}

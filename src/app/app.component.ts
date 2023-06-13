import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public form = this._fb.group({
    todos: this._fb.array([]),
  });

  get todosFormArray(): FormArray {
    return this.form.controls.todos as FormArray;
  }

  get todosArrayFormGroups(): FormGroup[] {
    return this.todosFormArray.controls as FormGroup[];
  }

  constructor(private _fb: FormBuilder) {}
}

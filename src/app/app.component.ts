import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public form = this._fb.group({
    todos: this._fb.array([], [Validators.minLength(1)]),
  });

  get todosFormArray(): FormArray {
    return this.form.controls.todos as FormArray;
  }

  get todosArrayFormGroups(): FormGroup[] {
    return this.todosFormArray.controls as FormGroup[];
  }

  public formUpdates$ = this.form.valueChanges.pipe(
    startWith(this.form.value),
    map((value) => {
      return {
        ...value,
        valid: this.form.valid,
      };
    })
  );

  constructor(private _fb: FormBuilder) {}

  addTodoFormGroup() {
    const newTodoGroup = this._fb.group({
      title: ['', [Validators.required]],
      complete: false,
    });

    this.todosFormArray.push(newTodoGroup);
  }

  removeFormGroup(index: number) {
    this.todosFormArray.removeAt(index);
  }
}

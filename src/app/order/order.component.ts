import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

// class MyFormControl extends FormControl {
//   public placeholder: string = 'my email';
// }


@Component({
  selector: 'course-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public formArrayModel: FormGroup = new FormGroup({
    emails: new FormArray([new FormControl('')])
  });

  public formModel: FormGroup;

  public constructor(
    private _fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.formModel = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      male: [true],
      passwordGroup: this._fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(4)]],
          pconfirm: ['', [Validators.required, Validators.minLength(4)]],
        },
        // {
        //   asyncValidator: this.asyncEqualValidator
        // }
      )
    });
  }

  // public submit(value: any): void {
  //   console.log(value);
  // }

  public addEmail(): void {
    (this.formArrayModel.get('emails') as FormArray).push(new FormControl(''));
  }

  public nameValidator(control: FormControl): { [key: string]: boolean } | null {
    const value: string = control.value || '';
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    return valid
      ? null
      : { nospecial: true };
  }

  public asyncEqualValidator({ value }: FormGroup): Observable<{ [key: string]: boolean } | null> {
    const [first, ...rest] = Object.keys(value || {});
    const valid: boolean = rest.every((v: string) => value[v] === value[first]);
    return Observable.of(
      valid
        ? null
        : { noequal: true }
    )
      .delay(5000);
  }
}

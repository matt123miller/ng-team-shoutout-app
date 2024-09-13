import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Colleague } from '@app/types/colleague';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'nominate-dialog',
  templateUrl: './nominate-dialog.component.html',
  styleUrls: ['./nominate-dialog.component.scss'],
})
export class NominateDialogComponent {
  valuesForm: FormGroup;

  public colleague!: Colleague;
  public companyValues = [
    {
      id: 'BeTheExpert',
      title: 'Be The Expert',
    },
    {
      id: 'FindASolution',
      title: 'Find A Solution',
    },
    {
      id: 'DoTheRightThing',
      title: 'Do The Right Thing',
    },
    {
      id: 'SuccessThroughPartnership',
      title: 'Success Through Partnership',
    },
    {
      id: 'EveryPebbleMatters',
      title: 'Every Pebble Matters',
    },
  ];

  constructor(fb: FormBuilder) {
    // this.colleague = data.colleague;
    this.valuesForm = fb.group({
      BeTheExpert: false,
      FindASolution: false,
      DoTheRightThing: false,
      SuccessThroughPartnership: false,
      EveryPebbleMatters: false,
      Reason: '',
    });
  }

  submit(): void {
    // this.dialogRef.close(this.valuesForm.value);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { NominateDialogComponent } from '@app/components/nominate-dialog/nominate-dialog.component';
import { type Colleague } from '@app/types/colleague';
import { Nomination } from '@app/types/nomination';
@Component({
  standalone: true,
  imports: [MatDivider],
  selector: 'colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss'],
})
export class ColleagueComponent implements OnInit {
  @Input()
  public colleague!: Colleague;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  public openDialog(event: Event) {
    console.log('dialog open');
    const dialogRef = this.dialog.open(NominateDialogComponent, {
      data: { colleague: this.colleague },
      panelClass: 'modal-container',
      minWidth: '200px',
      maxWidth: '80vw',
    });

    dialogRef.afterClosed().subscribe(this.submitData);
  }

  submitData(data: Nomination) {
    console.log(data);
  }
}

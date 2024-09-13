import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { Component, Input, ViewChild, inject } from '@angular/core';

import { type Colleague } from '@app/types/colleague';
import { Nomination } from '@app/types/nomination';
@Component({
  standalone: true,
  imports: [PortalModule],
  selector: 'colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss'],
})
export class ColleagueComponent {
  @Input()
  public colleague!: Colleague;

  private overlay = inject(Overlay);

  @ViewChild(CdkPortal) portal!: CdkPortal;

  public openDialog(event: Event) {
    console.log('dialog open');

    const config = new OverlayConfig({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      width: '60%',
      hasBackdrop: true,
    });
    const overlayRef = this.overlay.create(config);
    overlayRef.attach(this.portal);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
    // const dialogRef = this.dialog.open(NominateDialogComponent, {
    //   data: { colleague: this.colleague },
    //   panelClass: 'modal-container',
    //   minWidth: '200px',
    //   maxWidth: '80vw',
    // });

    // dialogRef.afterClosed().subscribe(this.submitData);
  }

  submitData(data: Nomination) {
    console.log(data);
  }
}

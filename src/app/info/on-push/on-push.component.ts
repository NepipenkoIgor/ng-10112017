import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, Input
} from '@angular/core';
import { Profile } from '../info.component';

@Component({
  selector: 'course-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent {

  @Input()
  public profile: Profile;

  public constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    // private _ngzone: NgZone,
    // private _elementRef: ElementRef,
  ) {
    setTimeout(() => {
      this._changeDetectorRef.detach();
    }, 4000);
    setTimeout(() => {
      this._changeDetectorRef.reattach();
    }, 8000);
  }

}

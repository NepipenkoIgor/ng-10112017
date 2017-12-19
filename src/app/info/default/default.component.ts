import { Component, Input } from '@angular/core';
import { Profile } from '../info.component';

@Component({
  selector: 'course-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  @Input()
  public profile: Profile;
}

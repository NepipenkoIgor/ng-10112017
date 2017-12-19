import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// export class Profile {
//   public constructor(
//     public firstName: string,
//     public lastName: string,
//   ) {}
//
//   public lastChanged(): Date {
//     return new Date;
//   }
// }

@Component({
  selector: 'course-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfoComponent implements OnInit {
  public profile1: Profile;
  public profile2: Profile;

  public ngOnInit(): void {
    this.profile1 = new Profile('Igor', 'Nepipenko');
    this.profile2 = new Profile('Vlad', 'Loban');

    setTimeout(() => {
      this.profile1.firstName = 'Taras1';
      this.profile2 = new Profile('Anton1', 'Vernic1');
    }, 5000);
    setTimeout(() => {
      this.profile1.firstName = 'Taras2';
      this.profile2 = new Profile('Anton1', 'Vernic1');
    }, 10000);
  }
}

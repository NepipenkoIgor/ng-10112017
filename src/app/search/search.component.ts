import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'course-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input()
  public placeholder: string;

  @Output()
  public mySearch: EventEmitter<string> = new EventEmitter();

  public ngOnInit(): void {

  }

  public search(value: string): void {
    this.mySearch.emit(value);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'course-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input()
  public placeholder: string;

  public constructor(
    private _searchService: SearchService
  ) {}

  public ngOnInit(): void {

  }

  public search(value: string): void {
    this._searchService.searchSequence$$ = value;
  }

}

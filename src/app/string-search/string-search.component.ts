import { SEARCH_ALGO, ISearchMatch } from './model';
import { Component, OnInit } from '@angular/core';
import { PerformanceTrackerService } from './performance-tracker.service';
import { StringSearchService } from './string-search.service';


@Component({
  selector: 'string-search',
  templateUrl: './string-search.component.html',
  styleUrls: ['./string-search.component.scss'],
  providers: [PerformanceTrackerService, StringSearchService]
})
export class StringSearchComponent implements OnInit {
  searchPattern: string = 'TRUTH';
  searchString: string = 'WE HOLD THESE TRUTHS TO BE SELF-EVIDENT';
  isVanilla = true;
  found = false;
  result : ISearchMatch[];

  constructor(private stringSearchService: StringSearchService) { }

  ngOnInit() {
  }

  onSearch() {
    this.found = false;
    const algo = this.isVanilla ? SEARCH_ALGO.VANILLA : SEARCH_ALGO.BMHP;
    this.result = this.stringSearchService.search(this.searchPattern, this.searchString, algo);
  }
  searchVanilla() {
    if (this.searchPattern && this.searchString && this.searchString.length >= this.searchPattern.length) {
      const stringLen = this.searchString.length;
      const patternLen = this.searchPattern.length;
      for (let i = 0; i <= stringLen; i++) {
        if (this.searchString.substring(i, i + patternLen) === this.searchPattern) {
          this.found = true;
          console.log('found');
          break;
        }
      }
    }
  }
  searchBMHP() {
    if (this.searchPattern && this.searchString && this.searchString.length >= this.searchPattern.length) {

    }
  }

}

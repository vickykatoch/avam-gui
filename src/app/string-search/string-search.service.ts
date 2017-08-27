import { VanillaSearchAlgo, VoyerMooreHorsePoolSearchAlgo } from './searchAlgos';
import { ISearchMatch, IStringSearchAlgo, SEARCH_ALGO } from './model';
import { Injectable } from '@angular/core';

@Injectable()
export class StringSearchService {

      search(pattern: string, searchString : string, algo: string) : ISearchMatch[] {
            const searchAlgo = this.getSearchAlgo(algo);
            return searchAlgo.search(pattern, searchString);
      }

      private getSearchAlgo(algo: string) : IStringSearchAlgo {
            switch(algo) {
                  case SEARCH_ALGO.VANILLA:
                        return new VanillaSearchAlgo();
                  case SEARCH_ALGO.BMHP:
                        return new VoyerMooreHorsePoolSearchAlgo();
                  default:
                        return new VanillaSearchAlgo(); 
            }
      }
}
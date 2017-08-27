

export interface Stat {
      stringLength : number;
      patternLength : number;
      swapsCount : number;
      comparisonCount : number;
}


export const SEARCH_ALGO = Object.freeze({
      VANILLA : 'VANILLA',
      BMHP : 'BMPH'
});


export interface IStringSearchAlgo {
      search(pattern: string, searchString: string ) : ISearchMatch[];
}


export interface ISearchMatch {
      start : number;
      length : number;
}
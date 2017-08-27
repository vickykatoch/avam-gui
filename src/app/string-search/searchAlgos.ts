import { IStringSearchAlgo, ISearchMatch } from './model';


export class VanillaSearchAlgo implements IStringSearchAlgo {

      search(pattern: string, searchString: string): ISearchMatch[] {
            const result: ISearchMatch[] = [];
            if (pattern && searchString && searchString.length >= pattern.length) {
                  const patternLen = pattern.length;
                  const stringLen = searchString.length;
                  for (let i = 0; i < stringLen; i++) {
                        if (searchString.substring(i, i + patternLen) === pattern) {
                              result.push({ start: i, length: patternLen });
                              i = i + patternLen;
                        }
                  }
            }
            return result;
      }

}

export class VoyerMooreHorsePoolSearchAlgo implements IStringSearchAlgo {

      search(pattern: string, searchString: string): ISearchMatch[] {
            const result: ISearchMatch[] = [];
            const badMatchTable = this.createBadMatchTable(pattern);
            if (pattern && searchString && searchString.length >= pattern.length) {
                  let i = 0;
                  const patternLength = pattern.length;
                  const stringLen = searchString.length;
                  while (i < stringLen) {
                        const chunk = searchString.substr(i,patternLength);
                        let isFound = true;
                        for(let j=patternLength-1;j>=0;j--) {
                              if(chunk.substr(j,1) !== pattern.substr(j,1)) {
                                    isFound = false;
                                    if(badMatchTable[chunk.substr(j,1)]) {
                                          i += badMatchTable[chunk.substr(j,1)];
                                    } else {
                                          i += badMatchTable['DF'];
                                    }
                                    break;
                              }
                        }
                        if(isFound) {
                              result.push({ start: i, length : patternLength});
                              i += patternLength;
                        }
                  }
            }
            return result;
      }
      private createBadMatchTable(pattern: string): { [key: string]: number } {
            const bmTable: { [key: string]: number } = { 'DF': pattern.length };
            const patternLength = pattern.length;
            for (let i = 0; i < patternLength - 1; i++) {
                  bmTable[pattern.substr(i, 1)] = patternLength - i - 1;
            }
            return bmTable;
      }
}
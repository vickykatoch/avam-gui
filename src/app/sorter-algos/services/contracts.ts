

export interface IComparable<T> {
    compare(right : T) : number;
}
export interface IPerformanceTracker {
    comparisons : number;
    swaps : number;
    reset() : void;
}

export interface ISorter<T extends IComparable<T>> extends IPerformanceTracker {
    sort(items : T[]) : T[];
}

export const SORT_TYPE = Object.freeze({
    BUBBLE : 'BUBBLE',
    INSERTION : 'INSERTION',
    SELECTION : 'SELECTION',
    MERGE : 'MERGE',
    QUICK : 'QUICK'
})
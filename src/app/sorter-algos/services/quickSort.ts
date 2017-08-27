

import { PerformanceTracker } from "./performanceTracker";
import { ISorter, IComparable } from "./contracts";

export class QuickSort<T extends IComparable<T>> extends PerformanceTracker<T> implements ISorter<T> {

    sort(items: T[]): T[] {
        throw new Error("Method not implemented.");
    }
}
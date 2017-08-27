

import { PerformanceTracker } from "./performanceTracker";
import { ISorter, IComparable } from "./contracts";

export class InsertionSort<T extends IComparable<T>> extends PerformanceTracker<T> implements ISorter<T> {

    sort(items: T[]): T[] {
        if (items.length > 0) {
            for (let i = 1; i < items.length; i++) {
                if (this.compare(items[i - 1], items[i]) > 0) {
                    this.swapIndex(items,i);
                }
            }
        }
        return items;
    }

    private swapIndex(items : T[], currentIndex: number) {
        for(let i=0;i<currentIndex;i++) {
            if(this.compare(items[i],items[currentIndex])>0) {
                this.swap(items,currentIndex,i);
            }
        }
    }
}
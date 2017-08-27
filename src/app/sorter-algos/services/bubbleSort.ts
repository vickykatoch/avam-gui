

import { PerformanceTracker } from "./performanceTracker";
import { ISorter, IComparable } from "./contracts";

export class BubbleSort<T extends IComparable<T>> extends PerformanceTracker<T> implements ISorter<T> {

    sort(items: T[]): T[] {
        if(items.length>0) {
            let swap = false;
            do {
                swap = false;
                for(let i=1;i<items.length;i++) {
                    if(this.compare(items[i-1],items[i]) > 0 ) {
                        this.swap(items,i-1,i);
                        swap=true;
                    }
                }
            } while(swap);
        }
        return items;
    }
}
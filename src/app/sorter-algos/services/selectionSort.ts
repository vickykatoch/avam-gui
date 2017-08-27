

import { PerformanceTracker } from "./performanceTracker";
import { ISorter, IComparable } from "./contracts";

export class SelectionSort<T extends IComparable<T>> extends PerformanceTracker<T> implements ISorter<T> {

    sort(items: T[]): T[] {
        if(items.length>0) {
            for(let i=0;i<items.length-1;i++) {
                let min = i;
                for(let j=i+1;j<items.length;j++) {
                    if(this.compare(items[j],items[min])<0) {
                        min=j;
                    }
                }
                if(min!==i) {
                    this.swap(items,min,i);
                }
            }
        }
        return items;
    }
   
}
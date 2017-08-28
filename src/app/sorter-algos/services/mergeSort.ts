

import { PerformanceTracker } from "./performanceTracker";
import { ISorter, IComparable } from "./contracts";

export class MergeSort<T extends IComparable<T>> extends PerformanceTracker<T> implements ISorter<T> {

    sort(items: T[]): T[] {
        if (items.length > 1) {
            const left = Math.floor(items.length/2);
            const right = items.length-left;
            const leftItems = items.slice(0,left);
            const rightItems = items.slice(left);
            this.sort(leftItems);
            this.sort(rightItems);
            this.merge(items,leftItems,rightItems)
        }
        return items;
    }
    private merge(items: T[],left: T[],right: T[]) {
        let remaining = left.length + right.length;
        let lIdx = 0, rIdx = 0, targetIdx = 0;

        while(remaining>0) {
            if(lIdx >= left.length) {
                this.assign(items,targetIdx,right[rIdx++]);
            } else if(rIdx >= right.length) {
                this.assign(items,targetIdx,left[lIdx++]);
            } else if(this.compare(left[lIdx], right[rIdx]) < 0) {
                this.assign(items,targetIdx,left[lIdx++]);
            } else {
                this.assign(items,targetIdx,right[rIdx++]);
            }
            targetIdx++;
            remaining--;
        }
    }
}


import { PerformanceTracker } from "./performanceTracker";
import { ISorter, IComparable } from "./contracts";

export class QuickSort<T extends IComparable<T>> extends PerformanceTracker<T> implements ISorter<T> {

    sort(items: T[]): T[] {
        if(items.length>0) {
            this.quickSort(items,0, items.length-1)
        }        
        return items;
    }
    private quickSort(items: T[],left : number, right : number) : void {
        if(left<right) {
            debugger;
            const pivot = this.getRandomNum(left,right);
            const newPivot = this.partition(items, left,right,pivot);
            this.quickSort(items,left, newPivot-1);
            this.quickSort(items,newPivot+1, right);
        }
    }
    private partition(items: T[],left : number, right : number, pivot : number) : number {
        const pivotValue = items[pivot];
            this.swap(items,pivot,right);
            let storeIndex = left;
            for(let i=left;i<right;i++) {
                if(this.compare(items[i],pivotValue) <0) {
                    this.swap(items,i,storeIndex);
                    storeIndex++;
                }
            }
            this.swap(items,storeIndex, right);
            return storeIndex;
    }
    private getRandomNum(from: number, to : number) : number {
        return Math.floor((Math.random() * to) + from);
    }
}

/*

public class QuickSort<T> : Tracker<T>, ISorter<T>
        where T : IComparable<T>
    {
        public void Sort(T[] items)
        {
            quicksort(items, 0, items.Length - 1);
        }

        private void quicksort(T[] items, int left, int right)
        {
            if (left < right)
            {
                int pivotIndex = _pivotRng.Next(left, right);
                int newPivot = partition(items, left, right, pivotIndex);

                quicksort(items, left, newPivot - 1);
                quicksort(items, newPivot + 1, right);
            }
        }

        private int partition(T[] items, int left, int right, int pivotIndex)
        {
            T pivotValue = items[pivotIndex];

            Swap(items, pivotIndex, right);

            int storeIndex = left;

            for (int i = left; i < right; i++)
            {
                if (Compare(items[i], pivotValue) < 0)
                {
                    Swap(items, i, storeIndex);
                    storeIndex += 1;
                }
            }

            Swap(items, storeIndex, right);
            return storeIndex;
        }

        Random _pivotRng = new Random();
    }

    */
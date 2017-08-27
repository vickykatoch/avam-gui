
import { Injectable } from "@angular/core";
import { ISorter, IComparable, SORT_TYPE } from "./contracts";
import { BubbleSort } from "./bubbleSort";
import { InsertionSort } from "./insertionSort";
import { SelectionSort } from "./selectionSort";
import { MergeSort } from "./mergeSort";
import { QuickSort } from "./quickSort";

export interface ISortOutput<T> {
    length : number;
    comparisons : number;
    swaps : number;
    result : T[];
}

@Injectable()
export class SorterService {
    sort<T extends IComparable<T>>(items : T[], sortType: string) : ISortOutput<T> {
        const sorter = this.getSorter<T>(sortType);
        const output = sorter.sort(items);
        return {
            length : items.length,
            comparisons : sorter.comparisons,
            swaps : sorter.swaps,
            result : output
        };
    }

    private getSorter<T extends IComparable<T>>(sortType: string) : ISorter<T> {
        let sorter : ISorter<T>; 
        switch(sortType) {
            case SORT_TYPE.BUBBLE :
                sorter = new BubbleSort<T>();
                break;
            case SORT_TYPE.INSERTION :
                sorter = new InsertionSort<T>();
                break;
            case SORT_TYPE.SELECTION :
                sorter = new SelectionSort<T>();
                break;
            case SORT_TYPE.MERGE :
                sorter = new MergeSort<T>();
                break;
            case SORT_TYPE.QUICK :
                sorter = new QuickSort<T>();
                break;
            default :
                sorter = new BubbleSort<T>();
                break;
        }            
        return sorter;
    }
}
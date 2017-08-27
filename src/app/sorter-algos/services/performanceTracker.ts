import { IPerformanceTracker, IComparable } from "./contracts";

export class PerformanceTracker<T extends IComparable<T>> implements IPerformanceTracker {
    private _comparisons: number=0;
    private _swaps: number=0;


    get comparisons(): number {
        return this._comparisons;
    }
    get swaps(): number {
        return this._swaps;
    }
    reset(): void {
        this._comparisons = this._swaps = 0;
    }

    protected swap(items: T[], left: number, right: number) {
        if (left != right) {
            this._swaps++;
            let temp: T = items[left];
            items[left] = items[right];
            items[right] = temp;
        }
    }
    protected assign(items: T[], index: number, value: T) {
        items[index] = value;
        this._swaps++;
    }
    protected compare(lhs: T, rhs: T): number {
        this._comparisons++;
        return lhs.compare(rhs);
    }
}
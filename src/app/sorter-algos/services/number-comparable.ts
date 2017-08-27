
import { IComparable } from "./contracts";

export class NumberComparable  {

    constructor(public num: number) {}

    compare(right: NumberComparable): number {
        return +this.num - +right.num;
    }

}
import { Component, OnInit } from '@angular/core';
import { SorterService, ISortOutput } from "./services/sorter.service";
import { IComparable, SORT_TYPE } from "./services/contracts";
import { NumberComparable } from "./services/number-comparable";

@Component({
  selector: 'sorter-algos',
  templateUrl: './sorter-algos.component.html',
  styleUrls: ['./sorter-algos.component.scss'],
  providers : [SorterService]
})
export class SorterAlgosComponent implements OnInit {
  numbers : string = "5,3,1,6,7,8,9,10,60,27,10";
  result : ISortOutput<NumberComparable>;
  strategy : string = SORT_TYPE.BUBBLE;
  output : string;

  constructor(private sorterService : SorterService) { }

  ngOnInit() {
  }

  onSort() {
      if(this.numbers) {
        const items = this.numbers.split(',').map(x=> new NumberComparable(+x));
        this.result = this.sorterService.sort(items,this.strategy);
        this.output = this.result.result.map(x=> x.num).join(', ');
      }
  }
}

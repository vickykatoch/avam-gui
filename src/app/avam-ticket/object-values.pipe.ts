import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';


@Pipe({ name : "valuesPipe"})
export class ObjectValuesPipe {
    transform(value : any, ...args: any[]) {
        if(value) {
            return _.values(value);
        }
        return [];
    }
}
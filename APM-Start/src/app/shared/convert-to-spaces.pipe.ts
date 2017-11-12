import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        // TODO JTI protect against args empty
        return value.replace(args[0], ' ');
    }

}

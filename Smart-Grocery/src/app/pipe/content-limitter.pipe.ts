import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentLimitter',
})
export class ContentLimitterPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 36) {
      return value.substring(0, 35) + '...';
    }
    return value;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefstrip'
})
export class PrefixStripPipe implements PipeTransform {

  transform(path : string): unknown {
    let dotsections = path.split(".");
    let modifieddotsections = dotsections.slice(0, dotsections.length-1);
    let modifedpath = modifieddotsections.join('.');
    return modifedpath;
  }

}

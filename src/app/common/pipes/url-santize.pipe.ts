import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'urlSantizer'
})
export class UrlSantizePipe implements PipeTransform {

  public constructor(
    private _santizer: DomSanitizer
  ) {

  }

  public transform(value: string): SafeUrl {
    if (!value) {
      return '';
    }
    return this._santizer.bypassSecurityTrustUrl(value);
  }

}

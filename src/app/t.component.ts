import {Component, Directive, ElementRef, HostListener, inject, Injectable} from "@angular/core";

@Directive({
  selector: 'a[href]',
  standalone: true
})
export class ExternalLinkDirective {
  private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const link = this.hostElement.nativeElement['href'];
    if (isExternalLink(link) && !confirm('Do you want to leave?')) {
      event.preventDefault();
    }
  }
}
function isExternalLink(link: string): boolean {
  return true
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log (message: any) {
    console.log(message)
  }

  warn (message: any) {
    console.warn(message)
  }

  error (message: any) {
    console.error(message)
  }
}

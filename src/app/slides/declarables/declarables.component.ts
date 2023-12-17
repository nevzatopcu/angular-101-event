import {Component} from "@angular/core";
import {TitleComponent} from "../../title/title.component";

@Component({
  selector: '[declarables]',
  templateUrl: './declarables.component.html',
  standalone: true,
  imports: [TitleComponent],
})
export class DeclarablesComponent {
  readonly bindingStr = `
    <input
        [value]="name"
        (valueChange)="name = $event.target.value" />
  `

  readonly callGreeting = `<app-greeting [name]="name" />`

  readonly clickDirective = `
@Directive({
  selector: 'a[href]',
  standalone: true
})
export class ExternalLinkDirective {
  private hostElement = inject(ElementRef);

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const link = this.hostElement.nativeElement['href'];
    if (isExternal(link) && !confirm('Confirm leave')) {
      event.preventDefault();
    }
  }
}
  `

  readonly pipeExample1 = `
@Component({
  standalone: true,
  selector: 'birthday-formatting',
  template: \`The birthday is {{ birthday | date:"shortDate" }} in the "shortDate" format\`,
  imports: [DatePipe],
})
export class BirthdayFormattingComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
}
`
  readonly  pipeExample2 = `
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({
  standalone: true,
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}
  `
}

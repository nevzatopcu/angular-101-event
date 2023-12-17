import {Component} from "@angular/core";

@Component({
  template: '<h3 class="text-start"> <ng-content /> </h3>',
  standalone: true,
  selector: 'app-title',
  styleUrl: './title.component.scss'
})
export class TitleComponent {}

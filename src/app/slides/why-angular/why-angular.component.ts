import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'why-angular',
  imports: [TitleComponent],
  templateUrl: './why-angular.component.html',
  standalone: true,
})
export class WhyAngularComponent {}

import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'who-use-angular',
  standalone: true,
  templateUrl: './who-use-angular.component.html',
  imports: [TitleComponent],
})
export class WhoUseAngularComponent {}

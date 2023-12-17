import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'resources',
  standalone: true,
  templateUrl: './resources.component.html',
  imports: [TitleComponent],
})
export class ResourcesComponent {}

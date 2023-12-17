import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: '[multi-page-apps]',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './multi-page-apps.component.html',
})
export class MultiPageAppsComponent {}

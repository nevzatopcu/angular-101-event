import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'what-is-angular',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './what-is-angular.component.html',
})
export class WhatIsAngularComponent {}

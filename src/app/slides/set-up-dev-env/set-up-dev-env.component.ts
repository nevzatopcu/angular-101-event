import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'set-up-dev-env',
  templateUrl: './set-up-dev-env.component.html',
  styleUrl: './set-up-dev-env.component.scss',
  standalone: true,
  imports: [TitleComponent],
})
export class SetUpDevEnvComponent {}

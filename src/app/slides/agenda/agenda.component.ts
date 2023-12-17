import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './agenda.component.html',
})
export class AgendaComponent {}

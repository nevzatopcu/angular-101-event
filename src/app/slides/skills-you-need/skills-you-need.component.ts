import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  standalone: true,
  templateUrl: './skills-you-need.component.html',
  imports: [TitleComponent],
  selector: 'skills-you-need',
})
export class SkillsYouNeedComponent {}

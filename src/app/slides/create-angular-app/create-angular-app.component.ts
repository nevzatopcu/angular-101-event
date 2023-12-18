import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'create-angular-app',
  standalone: true,
  template: `
    <app-title>Create Angular App</app-title>
    <div class="flex flex-col">
      <p>npx &#64;angular/cli new &lt;project-name&gt;</p>
      <div class="flex-grow flex ">
        <video data-autoplay>
          <source data-src="assets/create-angular-app.mov" />
          <source data-src="assets/create-angular-app.mov" />
        </video>
      </div>
    </div>
  `,
  imports: [TitleComponent],
})
export class CreateAngularAppComponent {}

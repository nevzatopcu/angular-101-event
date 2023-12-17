import {Component} from "@angular/core";
import {TitleComponent} from "../../title/title.component";

@Component({
  selector: '[single-page-apps]',
  standalone: true,
  imports: [
    TitleComponent
  ],
  templateUrl: './single-page-apps.component.html'
})
export class SinglePageAppsComponent {
}

import {Component} from "@angular/core";
import {TitleComponent} from "../../title/title.component";

@Component({
  templateUrl: './components.component.html',
  selector: 'app-components',
  standalone: true,
  imports: [TitleComponent],
})
export class ComponentsComponent {}

import {Component} from "@angular/core";
import {TitleComponent} from "../../title/title.component";

@Component({
  selector: '[app-services]',
  standalone: true,
  imports: [
    TitleComponent
  ],
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  loggerService = `
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log (message: any) {
    console.log(message)
  }

  warn (message: any) {
    console.warn(message)
  }

  error (message: any) {
    console.error(message)
  }
}
  `

  heroService = `
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes: Hero[] = [];

  private backend = inject(BackendService);
  private logger = inject(Logger)

  getHeroes() {
    this.backend.getAll(Hero).then( (heroes: Hero[]) => {
      this.logger.log(\`Fetched \${heroes.length} heroes.\`);
      this.heroes.push(...heroes); // fill cache
    });
    return this.heroes;
  }
}
  `
}

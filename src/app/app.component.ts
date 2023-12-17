import {Component, inject, OnInit} from '@angular/core';
import {RevealService} from "./reveal.service";
import {GreetingComponent} from "./slides/greeting/greeting.component";
import {AgendaComponent} from "./slides/agenda/agenda.component";
import {MultiPageAppsComponent} from "./slides/multi-page-apps/multi-page-apps.component";
import {SinglePageAppsComponent} from "./slides/single-page-apps/single-page-apps.component";
import {WhatIsAngularComponent} from "./slides/what-is-angular/what-is-angular.component";
import {SetUpDevEnvComponent} from "./slides/set-up-dev-env/set-up-dev-env.component";
import {CreateAngularAppComponent} from "./slides/create-angular-app/create-angular-app.component";
import {ComponentsComponent} from "./slides/components/components.component";
import {ResourcesComponent} from "./slides/resources/resources.component";
import {DeclarablesComponent} from "./slides/declarables/declarables.component";
import {ServicesComponent} from "./slides/services/services.component";
import {WhyAngularComponent} from "./slides/why-angular/why-angular.component";
import {SkillsYouNeedComponent} from "./slides/skills-you-need/skills-you-need.component";
import {WhoUseAngularComponent} from "./slides/who-use-angular/who-use-angular.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GreetingComponent, AgendaComponent, MultiPageAppsComponent, DeclarablesComponent, SinglePageAppsComponent, WhatIsAngularComponent, SetUpDevEnvComponent, CreateAngularAppComponent, ComponentsComponent, ResourcesComponent, ServicesComponent, WhyAngularComponent, SkillsYouNeedComponent, WhoUseAngularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private readonly revealService = inject(RevealService)

  ngOnInit() {
    this.revealService.initialize()
  }
}

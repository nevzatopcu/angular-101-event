import {Injectable} from "@angular/core";
import Reveal, {PluginFunction} from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import type {Options as RevealOptions} from "reveal.js"

const OPTIONS: RevealOptions = {
  controls: true,
  progress: true,
  center: true,
  hash: true
};

const PLUGINS: Array<PluginFunction> =  [Markdown, RevealHighlight];

@Injectable({
  providedIn: 'root'
})
export class RevealService {

  private ref?: Reveal.Api;

  initialize () {
    if (this.ref) {
      return
    }
    this.ref = createRevealInstance();
    this.ref.initialize(OPTIONS);
  }

}

function createRevealInstance(): Reveal.Api {
  return new Reveal({
    plugins: PLUGINS,
  })
}

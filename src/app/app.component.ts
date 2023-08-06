import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Icode';

  editorOptions = {theme: 'vs-light', language: 'javascript'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';
  model= {
    code: 'heLLo world!',
    language: 'text/plain'
  };
}

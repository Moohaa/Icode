import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Icode';

  editorOptions = { theme: 'vs-light', language: 'javascript' };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';

  editor: any;
  desiredNumberOfLines = 40;
  isLoading = false;
  activePane = 0;

  model = {
    code: 'heLLo world!',
    language: 'text/plain',
  };
  ngOnInit(): void {
    this.setNumberOfLines();
  }
  onInit(editor: any) {
    this.editor = editor;
  }
  run() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.activePane = 1;
    }, 20000);
  }
  setNumberOfLines() {
    for (let i = 0; i < this.desiredNumberOfLines; i++) {
      this.code += '\n'; // Add line breaks to the content
    }
  }

  onTabChange($event: number) {
    this.activePane = $event;
    console.log('onTabChange', $event);
  }
}

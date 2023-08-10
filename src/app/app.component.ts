import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './shared/services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'Icode';

  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  code: string = '\nfunction x() {console.log(\"Hello world!");}\n\n\n\n\nfor(let i=0;i<99;i++) x();';

  editor: any;
  desiredNumberOfLines = 40;
  isLoading = false;
  activePane = 0;
  output:string[]=[];

  status="";
  lang="js";

  model = {
    code: 'heLLo world!',
    language: 'text/plain',
  };

  constructor(private apiService:ApiServiceService){}
  ngOnInit(): void {
    //this.setNumberOfLines();
  }
  onInit(editor: any) {
    this.editor = editor;
  }
  run() {
    this.isLoading = true;

    this.apiService.execCode(this.lang,this.code).subscribe((data)=>{
      this.output=data.output.split("\n");
      this.output.map((line:string)=> {return line.replace(/\n/g,'')});
      if(this.output[this.output.length-2]=="finish") this.status="Success";
      else if(this.output[this.output.length-2]!="error") this.status="Error";
      else{
        this.status="Time limit exceeded";
      }

      this.output=this.output.slice(0,-2);
      this.isLoading = false;
      this.activePane = 1;
    })
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
  changeLanguage(lang:string){
    this.lang=lang;
    if(lang="js")this.editorOptions = { ...this.editorOptions, language: "javascript" ,theme: 'vs-dark' };
    if(lang="py")this.editorOptions = { ...this.editorOptions, language: "python" ,theme: 'vs-dark' };
    
  }
}

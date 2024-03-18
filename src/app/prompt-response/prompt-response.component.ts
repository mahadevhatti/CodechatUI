import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-prompt-response',
  standalone: true,
  imports: [],
  templateUrl: './prompt-response.component.html',
  styleUrl: './prompt-response.component.css',
})
export class PromptResponseComponent implements AfterViewInit {
  @ViewChild('testingPrompt', { static: false }) genPrompt!: ElementRef;
  
  
  constructor(private rd: Renderer2) {}

  ngAfterViewInit(): void {
    this.rd.addClass(this.genPrompt.nativeElement,"bg-gray");
    this.rd.addClass(this.genPrompt.nativeElement,"rounded-corner");

    const divEl = this.rd.createElement('div');
    this.rd.addClass(divEl,"text-secondary");
    this.rd.addClass(divEl, "flex-container");
    this.rd.addClass(divEl, "py-2");
    this.rd.addClass(divEl, "px-4");
    this.rd.addClass(divEl, "heading-bg");
    this.rd.addClass(divEl, "rounded-corner");

    const span1 = this.rd.createElement('span');
    const span2 = this.rd.createElement('span');
    const img = this.rd.createElement('img');

    this.rd.appendChild(span1, this.rd.createText('JavaScript'));
    this.rd.appendChild(span2, img);
    this.rd.setAttribute(img, 'src', 'assets/Images/copy-24.ico');
    this.rd.setAttribute(img, 'alt', '');
    this.rd.appendChild(span2, this.rd.createText('Copy code'));

    this.rd.addClass(span2, 'copy-style');    
    this.rd.appendChild(divEl, span1);
    this.rd.appendChild(divEl, span2);
    
    this.rd.appendChild(this.genPrompt.nativeElement,divEl);

    const div2 = this.rd.createElement('div');
    const code = this.rd.createElement('code');
    const span_1 = this.rd.createElement('span');
    const span_2 = this.rd.createElement('span');
    const span3 = this.rd.createElement('span');
    const span4 = this.rd.createElement('span');
    const span5 = this.rd.createElement('span');
    const span6 = this.rd.createElement('span');
    const br1 = this.rd.createElement('br');
    const br2 = this.rd.createElement('br');


    this.rd.addClass(div2,'code-part');

    this.rd.addClass(span_1,'keyword');
    this.rd.appendChild(span_1,this.rd.createText("const"));

    this.rd.addClass(span_2,'string');
    this.rd.appendChild(span_2,this.rd.createText(` 'Hello, World!'`));

    this.rd.addClass(span3,'keyword');
    this.rd.appendChild(span3,this.rd.createText("const"));

    this.rd.addClass(span4,'little-function');
    this.rd.appendChild(span4,this.rd.createText("btoa"));

    this.rd.addClass(span5,'fun');
    this.rd.appendChild(span5,this.rd.createText("console"));

   this.rd.addClass(span6,'little-function');
   this.rd.appendChild(span6,this.rd.createText("log"));

   this.rd.appendChild(code,span_1);
   this.rd.appendChild(code,this.rd.createText(" plainText ="));
   this.rd.appendChild(code,span_2);
   this.rd.appendChild(code,this.rd.createText(";"));
   this.rd.appendChild(code,br1);
   this.rd.appendChild(code,span3);
   this.rd.appendChild(code,this.rd.createText(" encodedText = "));
   this.rd.appendChild(code,span4);
   this.rd.appendChild(code,this.rd.createText("(plainText); "));
   this.rd.appendChild(code,br2);
   this.rd.appendChild(code,span5);
   this.rd.appendChild(code,this.rd.createText("."));
   this.rd.appendChild(code,span6);
   this.rd.appendChild(code, this.rd.createText("(encodedText);"));
   this.rd.appendChild(div2,code);
   this.rd.appendChild(this.genPrompt.nativeElement,div2);
  }
}

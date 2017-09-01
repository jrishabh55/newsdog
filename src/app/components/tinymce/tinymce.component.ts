import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
declare var tinymce: any;
@Component({
  selector: 'jnex-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss']
})
export class TinymceComponent implements AfterViewInit, OnDestroy {

  @Input() elementId: String;
  @Output() onEditorKeyUp = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      height: 500,
      width: 750,
      skin_url: '/assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyUp.emit(content);
        });
      },
    });
  }


  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}

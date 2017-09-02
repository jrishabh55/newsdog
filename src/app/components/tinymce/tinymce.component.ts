import {AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
declare var tinymce: any;
@Component({
  selector: 'jnex-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss']
})
export class TinymceComponent implements AfterViewInit, OnDestroy, AfterViewChecked {

  @Input() elementId: String;
  @Input() data: string;
  @Output() onEditorKeyUp = new EventEmitter<any>();


  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: [
        'link',
        'paste',
        'table',
        'advlist',
        'colorpicker',
        'emoticons',
        'hr',
        'image',
        'imagetools',
        'insertdatetime',
        'media',
        'autosave',
        'autoresize',
        'bbcode',
        'wordcount',
        'textcolor',
        'textpattern',
      ],
      width: 750,
      skin_url: '/assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('init', () => {
          editor.setContent(this.data);
        });
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyUp.emit(content);
        });
      },
    });
  }

  ngAfterViewChecked() {
  }


  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}

import { Component, VERSION } from '@angular/core';
import 'tinymce';
declare var tinymce: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  data = [
    {
      id: 'tiny-angular_806761632521651854132133',
      defaultValue: 'One',
      type: 'editor',
    },
    {
      id: 'tiny-angular_806761632521651854132144',
      defaultValue: 'Two',
      type: 'block',
    },
    {
      id: 'tiny-angular_806761632521651854132155',
      defaultValue: 'Three',
      type: 'block',
    },
  ];

  settings(id: string) {
    return {
      selector: '#' + id,
      height: 250,
      menubar: true,
      plugins: [],
      toolbar:
        'undo redo | casechange blocks | bold italic backcolor | \
     alignleft aligncenter alignright alignjustify | \
     bullist numlist checklist outdent indent | removeformat | code table | preview',
    };
  }
  editorInitialize(editorId: string, settings: any) {
    let editor = tinymce.get(editorId);
    tinymce.remove(editor);
    tinymce.init(settings);
  }
  moveDown(i: number) {
    const item = this.data.splice(i, 1)[0];
    this.data.splice(i + 1, 0, item);
    this.editorInitialize(item.id, this.settings(item.id));
  }
  moveUp(i: number) {
    const item = this.data.splice(i, 1)[0];
    this.data.splice(i - 1, 0, item);
    this.editorInitialize(item.id, this.settings(item.id));
  }
}

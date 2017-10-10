import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contract as API} from '../../../api/Contract';
import {Tag} from '../../../Interfaces';

@Component({
  selector: 'jnex-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {


  public form: FormGroup;

  public tags: Array<Tag>;
  public result: Boolean = null;
  public created: Boolean = null;

  public constructor(private api: API) {
  }

  public create(tag) {
    const url = this.api.buildUrl('/news/tag/add');

    this.api.post(url, tag).subscribe(response => {
      if (response.status === 'ok') {
        this.created = true;
        this.tags.unshift(response.data.tag);
      } else {
        this.created = false;
      }
    });
  }

  public deleteTag(id: number) {
    const url = this.api.buildUrl('news/tag/delete');
    this.api.post(url, {id: id}).subscribe(response => {
      if (response.status === 'ok') {
        this.tags.every((val, index): boolean => {
          if (val._id === id) {
            this.tags.splice(index, 1);
            return false;
          }
          return true;
        });
      } else {
      }
    });
  }

  public ngOnInit() {
    this.getCategories();
    this.validate();
  }

  public getCategories() {
    const url: string = this.api.buildUrl('news/tags');
    this.api.get(url).subscribe(response => {
      if (response.status = 'ok') {
        this.result = true;
        this.tags = response.data.tags;
        this.tags.sort(this.sort);
      } else {
        this.result = false;
      }
    });
  }

  public sort(a: Tag, b: Tag): number {
    return b._id - a._id;

  }

  public validate() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ]))
    });
  }

}

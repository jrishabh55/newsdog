import {Component, OnInit} from '@angular/core';
import {Contract as API} from '../../api/Contract';
import {Category} from '../../Interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'jnex-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  public form: FormGroup;

  public categories: Array<Category>;
  public result: Boolean = null;
  public created: Boolean = null;

  public constructor(private api: API) {
  }

  public create(category) {
    const url = this.api.buildUrl('/news/category/add');

    this.api.post(url, category).subscribe(response => {
      if (response.status === 'ok') {
        this.created = true;
        this.categories.unshift(response.data.category);
      } else {
        this.created = false;
      }
    });
  }

  public deleteCategory(id: number) {
    const url = this.api.buildUrl('news/category/delete');
    this.api.post(url, {id: id}).subscribe(response => {
      if (response.status === 'ok') {
        this.categories.every((val, index): boolean => {
          if (val._id === id) {
            this.categories.splice(index, 1);
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
    const url: string = this.api.buildUrl('news/categories');
    this.api.get(url).subscribe(response => {
      if (response.status = 'ok') {
        this.result = true;
        this.categories = response.data.categories;
        this.categories.sort(this.sort);
      } else {
        this.result = false;
      }
    });
  }

  public sort(a: Category, b: Category): number {
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
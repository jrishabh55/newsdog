import {Component, OnInit} from '@angular/core';
import {Contract as API} from '../../api/Contract';
import {Domain} from '../../Interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'jnex-add-domains',
  templateUrl: './add-domains.component.html',
  styleUrls: ['./add-domains.component.scss']
})
export class AddDomainsComponent implements OnInit {

    form: FormGroup;

    domains: Array<Domain> = [];
    result: Boolean = null;
    created: Boolean = null;

    constructor(private api: API) {
    }

    static sort(a: Domain, b: Domain): number {
      return b._id - a._id;

    }
    create(category) {
      const url = this.api.buildUrl('domains');

      this.api.post(url, category).subscribe(response => {
        if (response.status === 'ok') {
          this.created = true;
          this.domains.unshift(response.data.domain);
        } else {
          this.created = false;
        }
      });
    }

    deleteDomain(id: number) {
      const url = this.api.buildUrl('domain-' + id);
      this.api.del(url).subscribe(response => {
        if (response.status === 'ok') {
          this.domains.every((val, index): boolean => {
            if (val._id === id) {
              this.domains.splice(index, 1);
              return false;
            }
            return true;
          });
        } else {
          this.result = false;
        }
      });
    }

    ngOnInit() {
      this.getdomains();
      this.validate();
    }

    getdomains() {
      const url: string = this.api.buildUrl('domains');
      this.api.get(url).subscribe(response => {
        if (response.status = 'ok') {
          this.result = true;
          this.domains = response.data.domains;
          this.domains.sort(AddDomainsComponent.sort);
        } else {
          this.result = false;
        }
      });
    }

    validate() {
      this.form = new FormGroup({
        name: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$')
        ]))
      });
    }
}

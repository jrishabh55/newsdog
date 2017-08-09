import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '.aside-menu-toggler'
})
export class AsideMenuTogglerDirective {
  constructor() {}

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('aside-menu-hidden');
  }
}

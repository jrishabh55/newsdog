import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '.nav-dropdown'
})
export class NavDropdownDirective {

  private _open = false;

  /**
   * Checks if the dropdown menu is open or not.
   */
  isOpen() {
    return this._open;
  }

  /**
   * Opens the dropdown menu.
   */
  open() {
    this._open = true;
  }

  /**
   * Closes the dropdown menu .
   */
  close() {
    this._open = false;
  }

  /**
   * Toggles the dropdown menu.
   */
  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
}


@Directive({
  selector: '.nav-dropdown-toggle',
})
export class NavDropdownToggleDirective {
  constructor(private dropdown: NavDropdownDirective) {
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.dropdown.toggle();
  }
}

export const NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];


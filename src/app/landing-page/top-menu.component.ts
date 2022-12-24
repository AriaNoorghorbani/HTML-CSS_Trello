import { Component, QueryList, ViewChildren } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent {
  @ViewChildren(MatMenuTrigger) trigger: QueryList<MatMenuTrigger>;
  highlight: any;
  backdrop: boolean = false;
  openMenu(index: number) {
    this.trigger.toArray().forEach((item: MatMenuTrigger, i: number) => {
      this.backdrop = true;
      this.highlight = item.openMenu;
      if (i !== index && item.menuOpen) {
        item.closeMenu();
      }
    });
  }
}

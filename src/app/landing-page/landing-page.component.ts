import { Component, QueryList, ViewChildren } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  @ViewChildren(MatMenuTrigger) trigger: QueryList<MatMenuTrigger>;
  highlight: any;
  openMenu(index: number) {
    this.trigger.toArray().forEach((item: MatMenuTrigger, i: number) => {
      this.highlight = item.openMenu;
      if (i !== index && item.menuOpen) {
        item.closeMenu();
      }
    });
  }
}

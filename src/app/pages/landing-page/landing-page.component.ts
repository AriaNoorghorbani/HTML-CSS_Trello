import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  activatedCard: string = 'boards';
  workflowCard: string = 'right';
  xposition: string = '0';

  ngOnInit(): void {}

  onActive(item: string) {
    this.activatedCard = item;
    let firstName = 'asb';
    let lastName = 'gav';
  }

  onSliderScroll() {
    this.xposition = '200px';
  }

  onChangeSide(side: string) {
    this.workflowCard = side;
  }
}

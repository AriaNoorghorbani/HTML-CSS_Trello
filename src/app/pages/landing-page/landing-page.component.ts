import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  activatedCard: string = 'boards';

  ngOnInit(): void {}

  onActive(item: string) {
    this.activatedCard = item;
  }
}

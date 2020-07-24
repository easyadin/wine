import { WineService } from './../services/wine.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  constructor(private wineService: WineService) { }

  scrollYPosition = 0;

  wineList: any[] = [];
  wineSub: Subscription;

  ngOnInit() {
    this.wineSub = this.wineService.wineSubject.subscribe(winelist => {
      this.wineList = winelist;
    })
    this.wineService.fetchWines();
  }

  logScrolling(event) {
    this.scrollYPosition = event.detail.scrollTop;
  }

  ngOnDestroy(): void {
    this.wineSub.unsubscribe();
  }

}

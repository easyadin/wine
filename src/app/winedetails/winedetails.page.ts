import { Component, OnInit } from '@angular/core';
import { WineService } from '../services/wine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-winedetails',
  templateUrl: './winedetails.page.html',
  styleUrls: ['./winedetails.page.scss'],
})
export class WinedetailsPage implements OnInit {
  constructor(private wineService: WineService,
    private route: ActivatedRoute
  ) { }

  scrollYPosition = 0;
  selectedWine;

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        return;
      }
      // fetch wine details
      this.selectedWine = this.wineService.getWine(paramMap.get('id'))[0]
      console.log(this.selectedWine)
    })
  }


  logScrolling(event) {
    this.scrollYPosition = event.detail.scrollTop;
  }


}

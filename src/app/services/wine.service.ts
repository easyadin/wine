import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  constructor() {
    this.wineSubject.next([...this.wineList])
  }

  wineSubject = new Subject<any[]>();

  wineList:any[] = [
    {
      'id': '1',
      'name': 'Copenhagen',
      'img': '../../assets/main/wine1.png',
      'description': 'stylish wine bar was opened in 2009 by Martin Nygaard. Vinbaren Vesterbros Torv',
      'count': '4',
      'bgcolor': '#202145'
    },
    {
      'id': '2',
      'name': 'Copenhagen',
      'img': '../../assets/main/wine2.png',
      'description': 'stylish wine bar was opened in 2009 by Martin Nygaard. Vinbaren Vesterbros Torv',
      'count': '4',
      'bgcolor': '#33282F'
    },
    {
      'id': '3',
      'name': 'Copenhagen',
      'img': '../../assets/main/wine3.png',
      'description': 'stylish wine bar was opened in 2009 by Martin Nygaard. Vinbaren Vesterbros Torv',
      'count': '4',
      'bgcolor': '#0F2B2D'
    }
  ]

  fetchWines() {
    this.wineSubject.next([...this.wineList])
  }

  getWine(id) {
    return { ...this.wineList.filter(wine => wine.id === id) }
  }
}

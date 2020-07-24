import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WinedetailsPage } from './winedetails.page';

describe('WinedetailsPage', () => {
  let component: WinedetailsPage;
  let fixture: ComponentFixture<WinedetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinedetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WinedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

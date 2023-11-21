import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAnimeComponent } from './btn-anime.component';

describe('BtnAnimeComponent', () => {
  let component: BtnAnimeComponent;
  let fixture: ComponentFixture<BtnAnimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnAnimeComponent]
    });
    fixture = TestBed.createComponent(BtnAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

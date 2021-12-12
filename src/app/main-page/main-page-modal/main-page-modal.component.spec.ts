import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageModalComponent } from './main-page-modal.component';

describe('MainPageModalComponent', () => {
  let component: MainPageModalComponent;
  let fixture: ComponentFixture<MainPageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

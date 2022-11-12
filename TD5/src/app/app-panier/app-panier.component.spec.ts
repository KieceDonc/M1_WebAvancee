import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPanierComponent } from './app-panier.component';

describe('AppPanierComponent', () => {
  let component: AppPanierComponent;
  let fixture: ComponentFixture<AppPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

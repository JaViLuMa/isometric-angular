import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsometricAngular } from './isometric-angular';

describe('IsometricAngular', () => {
  let component: IsometricAngular;
  let fixture: ComponentFixture<IsometricAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsometricAngular],
    }).compileComponents();

    fixture = TestBed.createComponent(IsometricAngular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
